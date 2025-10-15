import { WpQueries } from "@/constants/WpQueries"
import Repository from "./Repository"
import OffsetPaginationType from "@/types/OffsetPaginationType"

class PostRepository {
    static getList({ categoryId, offsetPagination }: {
        categoryId?: number,
        offsetPagination: OffsetPaginationType
    }) {
        // 引数のcategoryIdがあれば特定のカテゴリーに絞る
        if (categoryId) {
            return Repository(
                WpQueries.listByCategory,
                { variables: { categoryId, offsetPagination } }
            ).getWp()
        }

	// なければ今まで通り全記事取得
        return Repository(WpQueries.list,
            { variables: { offsetPagination }}
        ).getWp()
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

    // 全カテゴリーのスラッグを取得
    static getAllCategorySlugList() {
        return Repository(WpQueries.allCategorySlugList).getWp()
    }

    // すべてのカテゴリ（name/slug）を取得
    static getAllCategories() {
        return Repository(WpQueries.allCategories).getWp()
    }

    // スラッグからカテゴリーIDを取得する
    static getCategoryIdBySlug({ slug }: {
        slug: string
    }) {
        return Repository(
            WpQueries.categoryIdBySlug,
            { variables: { id: slug } }
        ).getWp()
    }

    static getTotal() {
        return Repository(WpQueries.total).getWp()
    }
}

export default PostRepository