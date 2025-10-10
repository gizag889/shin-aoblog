import RepositoryFactory from "../repostitories/RepositoryFactory";
//types
import PostListType from "@/types/PostListType";
import PostType from "@/types/PostType";

//postservice
class AppliesTypes {
    static async getList(): Promise<PostListType[]> {
        try {

            const res = await RepositoryFactory.post.getList();

            return res.data.data.posts.edges.map((data: any) => {

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
        } catch  {
            return []
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


}

export default AppliesTypes