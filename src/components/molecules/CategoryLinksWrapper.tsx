import CategoryLinks from './CategoryLinks'
import CategoryType from '@/types/CategoryType'

const CategoryLinksWrapper = ({ categories }: { categories: CategoryType[] }) => {
    return <CategoryLinks categories={categories} />
}

export default CategoryLinksWrapper
