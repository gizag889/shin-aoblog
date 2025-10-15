'use client'
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostListType from "@/types/PostListType";
//component
import Layout from "../../../components/layouts/Layout";
import PostBox from "@/components/molecules/PostBox";
import AboutBox from "@/components/molecules/AboutBox";
import Pagination from "@/components/molecules/Pagination";
import PostConst from "@/constants/PostConst";
import CategoryTags from "@/components/molecules/CategoryTags";
import AppliesTypes from "@/services/PostServices";
import { useEffect, useState } from "react";

 

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

    const [allCategories, setAllCategories] = useState<{ slug: string, name: string }[]>([])

    useEffect(() => {
        // 全投稿からカテゴリ一覧を取得（ページングに依存しない）
        AppliesTypes.getAllCategories().then((cats) => {
            // 念のため slug でユニーク化
            const unique = Array.from(new Map(cats.map(c => [c.slug, c])).values())
            setAllCategories(unique)
        })
    }, [])

    return (
        <Layout>
            <div className='pt-6 mx-auto lg:max-w-screen-lg'>
                <div className='flex gap-10 items-start'>
                    <div className='grid grid-cols-2 gap-4'>
                        {postList.map((post) => {
                            return <PostBox key={post.id} post={post} />
                        })}
                    </div>
                    <div>
                        <AboutBox></AboutBox>
                        {allCategories.map((category) => (
                            <CategoryTags key={category.slug} category={category} />
                        ))}
                    </div>
                </div>
                <Pagination total={total} sizePerPage={PostConst.sizePerPage} currentPage={currentPage} path="" />
            </div>
        </Layout>
    )
}
