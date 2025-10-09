import RepositoryFactory from "../repostitories/RepositoryFactory";
//types
import PostListType from "@/types/PostListType";

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
}

export default AppliesTypes