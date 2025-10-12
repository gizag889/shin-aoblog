'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
import Layout from "@/components/layouts/Layout";
import PostBox from "@/components/molecules/PostBox";



export default function CategoryClient({
    categoryId,
    categoryList,
}: {
    categoryId: number,
    categoryList: PostListType[]
}) {
    const category = usePostListSwr({categoryId,  categoryList})
    return(
        <Layout>
            <div className='flex flex-wrap w-main mx-auto'>
                {categoryList!.map((post) => {
                return (
                    <div key={post.id} className='w-1/3 pr-4 pb-4 [&:nth-of-type(3n)]:pr-0'>
                    <PostBox post={post} />
                    </div>
                )
                })}
            </div>
        </Layout>
    )
}