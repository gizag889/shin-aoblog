'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
//component
import Layout from "../../../components/layouts/Layout";
import PostBox from "@/components/molecules/PostBox";
import AboutBox from "@/components/molecules/AboutBox";

export default function HomeClient({
    staticPostList,
}: {
    staticPostList: PostListType[]

}) {
    const postList = usePostListSwr(
        staticPostList
     
    )



    return (
        <Layout>
            <div className='pt-6 mx-auto lg:max-w-screen-lg'>
                <div className='flex gap-10 items-start'>
                    <div className='grid grid-cols-2 gap-4'>
                        {postList.map((post) => {
                            return (
                                <PostBox key={post.id} post={post} />
                            )
                        })}
                    </div>
                    <AboutBox></AboutBox>
                </div>
            </div>
        </Layout>
    )
}

