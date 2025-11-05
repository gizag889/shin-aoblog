import AppliesTypes from "@/services/PostServices";
import { notFound } from "next/navigation";
import CategoryClient from "../../categoryClient";


export default async function categoryPage({ params }: { params: { slug: string, page: string}}){

    const categoryId = await AppliesTypes.getCategoryIdBySlug({ slug: params.slug });
    if (!categoryId) {
        notFound();
    }
    
    const page = parseInt(params.page);
    const [staticPost] = await AppliesTypes.getList({ categoryId, page });
    if (!staticPost || staticPost.length === 0) {
        notFound();
    }

    return <CategoryClient categoryId={categoryId} categoryList={staticPost} currentPage={page} categorySlug={params.slug} />
}

export const revalidate = 10

export async function generateStaticParams() {
    const paths = await AppliesTypes.getTotalCategory();
    
    // ページネーションも含めた全てのパスを生成
    return paths.map((path) => {
        const param = path.params.param;
        if (param.length >= 4 && param[0] === 'category' && param[2] === 'page') {
            return { 
                slug: param[1], 
                page: param[3] 
            };
        }
        return null;
    }).filter(item => item !== null);
}