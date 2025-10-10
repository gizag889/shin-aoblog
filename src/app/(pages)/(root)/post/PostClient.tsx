'use client'

import usePostSwr from "@/hooks/swr/usePostSwr";
import PostType from "@/types/PostType";

import Layout from "@/components/layouts/Layout";
import CommImage from "@/components/atoms/image/CommImage";


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
        <div className="w-main mx-auto">
            <article>
                <div className="mb-4">
                    <CommImage
                        src={post!.featuredImage.url}
                        alt=""
                        />
                </div>
                <div className="flex mb-4">
                  
                    {/* <DateText>{post!.date}</DateText> */}
                </div>
                {/* <div className="flex mb-4">
                    <div className="mr-3">
                        <Link href={post!.category.slug}>
                                <div>{post!.category.name}</div>
                        </Link>
                    </div>
                    <DateText>{post!.date}</DateText>
                </div> */}
                <div className="mb-6">
                    <div>{post!.title}</div>
                </div>
                <div dangerouslySetInnerHTML={{__html: post!.content}}></div>
            </article>
        </div>
    </Layout>
    )
}