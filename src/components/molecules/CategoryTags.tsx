import React from 'react'
import CategoryType from '@/types/CategoryType'

const CategoryTags = ({ category }: {
    category: CategoryType
}) => {
  return (
    <div>{category.name}</div>
  )
}

export default CategoryTags