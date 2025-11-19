import AppliesTypes from "@/services/PostServices";
import PostType from "@/types/PostType";
import { notFound } from "next/navigation";
import PostClient from "../PostClient";
import Script from "next/script";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {

	const { slug } = await params;
	const staticPost: PostType | null = await AppliesTypes.getOne({ id: slug });
	if (!staticPost) {
		notFound();
	}
	return <PostClient slug={slug} staticPost={staticPost} />
}


export const revalidate = 10

export async function generateStaticParams() {
    const list = await AppliesTypes.getAllSlugList();
    // Service returns [{ params: { slug } }], transform to [{ slug }]
    return list.map((item) => ({ slug: item.params.slug }));
  }