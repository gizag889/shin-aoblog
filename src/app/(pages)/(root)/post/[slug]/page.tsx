import AppliesTypes from "@/services/PostServices";
import PostType from "@/types/PostType";
import { notFound } from "next/navigation";
import PostClient from "../PostClient";



export default async function PostPage({ params }: { params: { slug: string } }) {

    const staticPost: PostType | null = await AppliesTypes.getOne({ id: params.slug });
    if (!staticPost) {
        notFound();
    }
    return <PostClient slug={params.slug} staticPost={staticPost} />
}


export const revalidate = 10

export async function generateStaticParams() {
    const list = await AppliesTypes.getAllSlugList();
    // Service returns [{ params: { slug } }], transform to [{ slug }]
    return list.map((item) => ({ slug: item.params.slug }));
  }