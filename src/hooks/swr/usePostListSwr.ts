import useSWR from "swr";
// const
import { WpQueries } from "@/constants/WpQueries";
// type
import PostListType from "../../types/PostListType";
// service
import AppliesTypes from "@/services/PostServices";


const usePostListSwr = (staticPostList: PostListType[] ) => {
    const { data: postList } = useSWR(
        WpQueries.list,
        AppliesTypes.getList,
        { fallbackData: staticPostList }
    )

    return postList;
}

export default usePostListSwr;