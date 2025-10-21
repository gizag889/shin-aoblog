import PostListType from "@/types/PostListType";
import AppliesTypes from "@/services/PostServices";
import CategoryClient from "./categoryClient";
import { notFound } from "next/navigation";


export default async function categoryPage({ params }: { params: { slug: string}}){

    const categoryId = await AppliesTypes.getCategoryIdBySlug({ slug:params.slug });
    if (!categoryId) {
        notFound();
    }
    const [staticPost] = await AppliesTypes.getList({ categoryId, page: 1 });
    if (!staticPost || staticPost.length === 0) {
        notFound();
    }
    return <CategoryClient categoryId={categoryId} categoryList={staticPost} currentPage={1} categorySlug={params.slug}/>

    

}

export const revalidate = 10

    export async function generateStaticParams() {
        const list = await AppliesTypes.getAllCategorySlugList();
        // Service returns [{ params: { slug } }], transform to [{ slug }]
        return list.map((item) => ({ slug: item.params.slug }));
      }