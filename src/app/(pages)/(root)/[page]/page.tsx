import AppliesTypes from "@/services/PostServices";
import PostListType from "@/types/PostListType";
import HomeClient from "./HomeClient";
import { notFound } from "next/navigation";

export default async function HomeByPage({ params }: { params: { page: string } }) {
  const currentPage = Number(params.page)
  console.log('Current page:', currentPage); // デバッグ用
  
  if (!Number.isFinite(currentPage) || currentPage < 1) {
      notFound()
  }
  
  const [staticPostList, staticTotal]: [PostListType[], number] = await AppliesTypes.getList({ page: currentPage });
  
  console.log('Post list length:', staticPostList?.length); // デバッグ用
  console.log('Total:', staticTotal); // デバッグ用
  
  // if (!staticPostList || staticPostList.length === 0) {
  //     notFound()
  // }

  return <HomeClient staticPostList={staticPostList} staticTotal={staticTotal} currentPage={currentPage} />
}

export const revalidate = 10

export async function generateStaticParams() {
    const list = await AppliesTypes.getAllPageList();
    // Service returns [{ params: { page } }], transform to [{ page }]
    return list.map((item) => ({ page: item.params.page }));
}
