import React from 'react'
import CategoryType from '@/types/CategoryType'
import Link from 'next/link'

const CategoryTags = ({ category }: {
    category: CategoryType
}) => {
  return (
    <Link href={`/category/${category.slug}`}>
          <div>{category.name}</div>
    </Link>
  )
}

export default CategoryTags