'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
//component
import Layout from "@/components/layouts/Layout";
import PostBox from "@/components/molecules/PostBox";
import AboutBox from "@/components/molecules/AboutBox";
import Pagination from "@/components/molecules/Pagination";
import PostConst from "@/constants/PostConst";
import CategoryTags from "@/components/molecules/CategoryTags";
import AppliesTypes from "@/services/PostServices";
import { useEffect, useState } from "react";
import CategoryLinks from "@/components/molecules/CategoryLinks";

 

export default function HomeClient({
    staticPostList,
    staticTotal,
    currentPage
}: {
    staticPostList: PostListType[],
    staticTotal: number,
    currentPage: number

}) {
    const [postList, total] = usePostListSwr({
        staticPostList,
        staticTotal,
        currentPage
    })

   

    return (
        <Layout>
            <div className='pt-6 mx-auto lg:max-w-screen-lg'>
                <div className='flex gap-10 items-start'>
                    <div className='grid grid-cols-2 gap-4  '>
                        {postList.map((post) => {
                            return <PostBox key={post.id} post={post} />
                        })}
                    </div>
                    <div>
                        <AboutBox></AboutBox>
                       <CategoryLinks></CategoryLinks>
                    </div>
                </div>
                <Pagination total={total} sizePerPage={PostConst.sizePerPage} currentPage={currentPage} path="" />
            </div>
        </Layout>
    )
}