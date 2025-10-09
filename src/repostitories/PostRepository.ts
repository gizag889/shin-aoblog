import { WpQueries } from "@/constants/WpQueries"
import Repository from "./Repository"

class PostRepository {
    static getList() {
        return Repository(WpQueries.list).getWp()
    }
}

export default PostRepository