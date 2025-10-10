import { WpQueries } from "@/constants/WpQueries"
import Repository from "./Repository"

class PostRepository {
    static getList() {
        return Repository(WpQueries.list).getWp()
    }

    　// slugから記事単体を取得
    static getOne({ id }: { // idを引数にとる
        id: string
    }) {
        return Repository(
            WpQueries.one,
            { variables: { id } } // ココが今までと違う！
        ).getWp()
    }

    // 全記事のslugを取得
    static getAllSlugList() {
        return Repository(WpQueries.allSlugList).getWp()
    }
}

export default PostRepository