import useSWR from "swr";
// const
import { WpQueries } from "@/constants/WpQueries";
// type
import PostListType from "@/types/PostListType";
// service
import AppliesTypes from "@/services/PostServices";

const usePostListSwr = ({ currentPage, categoryId, staticPostList, staticTotal }: {
    currentPage: number,
    categoryId?: number,
    staticPostList: PostListType[],
    staticTotal: number
}) => {
    let key, fetcher
    if (categoryId) {
        key = [WpQueries.listByCategory, currentPage, categoryId]
        fetcher = ([_, page, categoryId]: [string, number, number]) => AppliesTypes.getList({ page, categoryId })
    } else {
        key = [WpQueries.list, currentPage]
        fetcher = ([_, page]: [string, number]) => AppliesTypes.getList({ page })
    }
    const { data } = useSWR<[PostListType[], number]>(
        key,
        fetcher,
        { fallbackData: [staticPostList, staticTotal] }
    )
    return data ?? [staticPostList, staticTotal]
}

export default usePostListSwr