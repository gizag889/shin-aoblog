import AppliesTypes from "@/services/PostServices";
import PostListType from "@/types/PostListType";
import HomeClient from "./HomeClient";



export default async function Home() {
    const currentPage = 1
    const [staticPostList, staticTotal]: [PostListType[], number] = await AppliesTypes.getList({ page: currentPage });
    return <HomeClient staticPostList={staticPostList} staticTotal={staticTotal} currentPage={currentPage} />
}


export const revalidate = 10

export async function generateStaticParams() {
    return [{}]
  }