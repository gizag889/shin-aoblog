'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
import Layout from "../Layout";

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
                        {postList!.map((post) => {
                            return <p className="from-neutral-300" key={post.id}>{post.title}</p>
                        })}
                    </div>
                    {/* <AboutBox></AboutBox> */}
                </div>
            </div>
        </Layout>
    )
}

