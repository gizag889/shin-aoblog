'use client'

import usePostSwr from "@/hooks/swr/usePostSwr";
import PostType from "@/types/PostType";

import Layout from "@/components/layouts/Layout";
import PostContent from "@/components/layouts/PostContent";

import Link from "next/link";
import DateText from "@/components/atoms/text/DateText";
import CategoryLinks from "@/components/molecules/CategoryLinks";

export default function PostClient({
    slug,
    staticPost,
}: {
    slug: string,
    staticPost: PostType
}) {
    const post = usePostSwr({ id: slug, staticPost})

    return(
    <Layout>
        <div className="pt-10   mx-auto">
            <div className=" w-(--breakpoint-sm) mx-auto  vobject-contain  mb-4">
                    <img
                        
                        src={post!.featuredImage.url}
                        alt="投稿のサムネイル"
                        />
            </div>
            <div className="pt-10 flex  justify-center gap-15">
                    <article className="w-(--breakpoint-md) border-1 border-(--color-divider-main) rounded-lg">
                        <div className=" ">
                            <div className="p-4 bg-(--color-primary-main) rounded-md ">
                                <div>
                                    <div className="text-4xl font-bold">{post!.title}</div>
                                </div>
                                <div className="">
                                    <DateText>{post!.date}</DateText>
                                    <div className="pt-2">
                                        <Link href={post!.category.slug}>
                                                <div className="p-2 inline-block rounded-md border border-(--color-divider-main) bg-(--color-background-default)">
                                                    {post!.category.name}
                                                </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <PostContent>
                                <div className="p-6 indent-4 text-pretty wrap-anywhere" dangerouslySetInnerHTML={{__html: post!.content}}></div>

                            </PostContent>

                        </div>
                    </article>
                    <CategoryLinks></CategoryLinks>

            </div>
            
            
        </div>
    </Layout>
    )
}