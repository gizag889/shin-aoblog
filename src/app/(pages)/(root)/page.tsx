import AppliesTypes from "@/services/PostServices";
import PostListType from "@/types/PostListType";
import HomeClient from "./HomeClient";



export default async function Home() {

    const staticPostList: PostListType[] = await AppliesTypes.getList();
    return <HomeClient staticPostList={staticPostList} />
}


export const revalidate = 10

export async function generateStaticParams() {
    return [{}]
  }