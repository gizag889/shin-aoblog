import PostListType from "@/types/PostListType";
import AppliesTypes from "@/services/PostServices";
import { notFound } from "next/navigation";
import CategoryClient from "../../categoryClient";


export default async function categoryPage({ params }: { params: { slug: string}}){

    const categoryId = await AppliesTypes.getCategoryIdBySlug({ slug:params.slug });
    if (!categoryId) {
        notFound();
    }
    const [staticPost] = await AppliesTypes.getList({ categoryId, page: 1 });
    if (!staticPost || staticPost.length === 0) {
        notFound();
    }

    

}

export const revalidate = 10

export async function generateStaticParams() {
    const paths = await AppliesTypes.getTotalCategory();
    
    // ページネーションも含めた全てのパスを生成
    return paths.map((path) => {
        const param = path.params.param;
        if (param.length >= 2 && param[0] === 'category') {
            const categorySlug = param[1];
            return { slug: categorySlug };
        }
        return { slug: '' };
    }).filter(item => item.slug !== '');
}