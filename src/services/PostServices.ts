import RepositoryFactory from "../repostitories/RepositoryFactory";
//types
import PostListType from "@/types/PostListType";
import PostType from "@/types/PostType";
import OffsetPaginationType from "@/types/OffsetPaginationType";

import PostConst from "@/constants/PostConst";
import { WpQueries } from "@/constants/WpQueries";

//postservice
class AppliesTypes {
    static async getList({ categoryId, page }: { 
        categoryId?: number, page: number } ): Promise<[PostListType[], number]> {
        try {
            const offsetPagination = this._makeOffsetPaginationFromPage(page)

            const res = await RepositoryFactory.post.getList({ categoryId, offsetPagination });
            
            const postList = res.data.data.posts.edges.map((data: any) => {

                const post: PostListType = {
                    id: data.node.id,
                    title: data.node.title,
                    slug: data.node.slug,
                    date: data.node.date,
                    excerpt: data.node.excerpt,
                    featuredImage: {
                        url: data.node.featuredImage.node.sourceUrl
                    },
                    category: {
                        slug: data.node.categories.edges[0].node.slug,
                        name: data.node.categories.edges[0].node.name
                    }
                }
              return post
            })
            const total = res.data.data.posts.pageInfo.offsetPagination.total
            return [postList, total]
        } catch {
            return [[], 0];
        }
    
    }

    // slugから記事単体を取得
    static async getOne({ id }: {
        id: string
    }): Promise<PostType | null> { // エラーがあればnullを返す
        try {
            const res = await RepositoryFactory.post.getOne({ id }) // idを引数に取る
            const data = res.data.data.post
            const post: PostType = {
                id: data.id,
                title: data.title,
                slug: data.slug,
                date: data.date,
                content: data.content,
                featuredImage: {
                    url: data.featuredImage.node.sourceUrl
                },
                category: {
                    slug: data.categories.edges[0].node.slug,
                    name: data.categories.edges[0].node.name
                }
            }
            return post // 配列ではなくPostTypeを返す
        } catch {
            return null // エラーがあればnullを返す
        }
    }

    static async getAllSlugList(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.post.getAllSlugList()
            return res.data.data.posts.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }

    // 全カテゴリーのスラッグを取得（getAllSlugListに微妙にまとめにくので別メソッドを分ける）
    static async getAllCategorySlugList(): Promise<{
        params: {
            slug: string
        }
    }[]> {
        try {
            const res = await RepositoryFactory.post.getAllCategorySlugList()
            return res.data.data.categories.edges.map((data: any) => {
                return { params: { slug: data.node.slug } }
            })
        } catch {
            return []
        }
    }

    static async getAllPageList(): Promise<{
        params: {
            page: string
        }
    }[]> {
        const total = await this.getTotal()
        const pageTotal = Math.ceil(total / PostConst.sizePerPage)
        const pageList = [...Array(pageTotal)].map((_, i) => i + 1)
        return pageList.map((page:number) => {
            return { params: { page: page.toString() }}
        })
    }

     // スラッグからカテゴリーIDを取得する
     static async getCategoryIdBySlug({ slug }: {
        slug: string
    }): Promise<number> {
        const res = await RepositoryFactory.post.getCategoryIdBySlug({ slug })
        return res.data.data.category.categoryId
    }

    static async getTotal(): Promise<number> {
        const res = await RepositoryFactory.post.getTotal()
        return res.data.data.posts.pageInfo.offsetPagination.total
    }

    private static _makeOffsetPaginationFromPage(page: number): OffsetPaginationType {
        return { offset: (page - 1) * PostConst.sizePerPage, size: PostConst.sizePerPage }
    }
   


}

export default AppliesTypes