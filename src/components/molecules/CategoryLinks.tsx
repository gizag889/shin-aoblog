import React from 'react'
import CategoryTags from './CategoryTags'
import CategoryType from '@/types/CategoryType'

const CategoryLinks = ({ categories }: { categories: CategoryType[] }) => {
    const uniqueCategories = Array.from(
        new Map(categories.map(c => [c.slug, c])).values()
    );

    return (
        <div className='w-70'>
            <div className="pt-5">
                <div className='rounded-t-2xl bg-[#0C0C0C] border-1 border-(--color-divider-main)'>
                    <div className='text-center py-2'>カテゴリー</div>
                </div>
                <div className='flex flex-wrap gap-4 p-5 bg-(--color-background-default) border-1 border-(--color-divider-main) rounded-b-2xl'>
                    {uniqueCategories.map((category) => (
                        <CategoryTags key={category.slug} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryLinks