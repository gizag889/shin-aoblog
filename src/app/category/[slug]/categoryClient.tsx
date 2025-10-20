'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
import Layout from "@/components/layouts/Layout";
import PostBox from "@/components/molecules/PostBox";
import PostConst from "@/constants/PostConst";
import Pagination from "@/components/molecules/Pagination";


export default function CategoryClient({
    categoryId,
    categoryList,
    currentPage
}: {
    categoryId: number,
    categoryList: PostListType[]
    currentPage: number
}) {
    const [posts, total] = usePostListSwr({
        currentPage: 1,
        categoryId,
        staticPostList: categoryList,
        staticTotal: categoryList.length
    })
    return(
        <Layout>
            <div className='flex flex-wrap w-main mx-auto'>
                {posts.map((post) => {
                return (
                    <div key={post.id} className='w-1/3 pr-4 pb-4 [&:nth-of-type(3n)]:pr-0'>
                        <PostBox  post={post} />
                    </div>
                )
                })}
            </div>
            <Pagination total={total} sizePerPage={PostConst.sizePerPage} currentPage={currentPage} path="" />

        </Layout>
    )
}