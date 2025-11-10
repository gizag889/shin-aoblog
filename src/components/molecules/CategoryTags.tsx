import React from 'react'
import Link from 'next/link'
import CategoryType from '../../types/CategoryType'




const CategoryTags = ({ category }: {
    category: CategoryType
}) => {
  return (
    <Link href={`/category/${category.slug}`}>
          <div className='hover:text-(--color-secondary-main) hover:border-(--color-secondary-main) p-2 rounded-md border border-(--color-divider-main) bg-(--color-primary-main)'>{category.name}</div>
    </Link>
  )
}

export default CategoryTags