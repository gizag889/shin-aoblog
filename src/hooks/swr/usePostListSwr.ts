import useSWR from "swr";
// const
import { WpQueries } from "@/constants/WpQueries";
// type
import PostListType from "../../types/PostListType";
// service
import AppliesTypes from "@/services/PostServices";


const usePostListSwr = ({ categoryId, categoryList }: {
    categoryId?: number,
    categoryList: PostListType[]
}) => {
    let key, fetcher
    if(categoryId) {
        key = [WpQueries.listByCategory, categoryId]
        fetcher = ([_, categoryId]: [string, number]) => AppliesTypes.getList({ categoryId })
    } else {
        key = WpQueries.list
        fetcher = AppliesTypes.getList
    }
    const { data: postList } = useSWR(
        key,
        fetcher,
        { fallbackData:categoryList }
    )

    return postList;
}

export default usePostListSwr;