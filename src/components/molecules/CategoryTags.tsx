import React from 'react'
import CategoryType from '@/types/CategoryType'
import Link from 'next/link'

const CategoryTags = ({ category }: {
    category: CategoryType
}) => {
  return (
    <Link href={`/category/${category.slug}`}>
          <div className='p-2 rounded-md border border-(--color-divider-main)'>{category.name}</div>
    </Link>
  )
}

export default CategoryTags