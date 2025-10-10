import  useSWR  from 'swr';// const


import { WpQueries } from "@/constants/WpQueries"
// type
import PostType from "../../types/PostType"
// service
import AppliesTypes from "@/services/PostServices"

const usePostSwr = ({ id, staticPost }: {
    id: string,
    staticPost: PostType
}) => {
    const { data: post } = useSWR(
        [WpQueries.list, id], //　Keyを配列にもできる
        ([_, id]: [string, string]) => AppliesTypes.getOne({ id }), // 使うのはidだけなので第一引数はアンダースコアに
        { fallbackData: staticPost }
    )
    return post
}

export default usePostSwr