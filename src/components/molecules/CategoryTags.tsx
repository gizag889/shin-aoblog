import React from 'react'
import Link from 'next/link'
import type CategoryType from '@/types/CategoryType'

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