import AppliesTypes from "@/services/PostServices";
import PostListType from "@/types/PostListType";
import HomeClient from "../HomeClient";
import { notFound } from "next/navigation";

export default async function HomeByPage({ params }: { params: { page: string } }) {
    const currentPage = Number(params.page)
    if (!Number.isFinite(currentPage) || currentPage < 1) {
        notFound()
    }
    const [staticPostList, staticTotal]: [PostListType[], number] = await AppliesTypes.getList({ page: currentPage });
    if (!staticPostList || staticPostList.length === 0) {
        notFound()
    }
    return <HomeClient staticPostList={staticPostList} staticTotal={staticTotal} currentPage={currentPage} />
}

export const revalidate = 10

export async function generateStaticParams() {
    const list = await AppliesTypes.getAllPageList();
    // Service returns [{ params: { page } }], transform to [{ page }]
    return list.map((item) => ({ page: item.params.page }));
}


