import React from 'react'
// 
import PostListType from '../../types/PostListType'
import CommImage from '../atoms/image/CommImage'
import Link from 'next/link'
//component
import DateText from '../../components/atoms/text/DateText'
import PosTitle from '../../components/atoms/text/PosTitle'
import ModifiedText from '../../components/atoms/text/ModifiedText'



const PostBox = ({ post }: {
    post: PostListType
}) => {
  return ( 
    <div className=' cursor-pointer   shadow-xs'>       
        {/* keyを削除 */}
        <div className='relative bg-(--color-primary-main) border-1 border-(--color-divider-main) hover:border-(--color-secondary-main) rounded-lg overflow-hidden
                        after:absolute after:inset-0 after:bg-[rgba(71,72,75,0.5)] after:opacity-0 hover:after:opacity-100 
                        after:transition-opacity after:duration-300 after:ease-in-out after:pointer-events-none after:rounded-lg after:z-[4]'>
            <div className='relative hover:text-(--color-secondary-main) z-[5]'>
                <Link href={`/post/${post.slug}`}>
                    <CommImage 
                        src={post.featuredImage?.url} 
                        alt={post.title}
                    /> 
                    <div className='p-4'>
                        <PosTitle>{post.title}</PosTitle>
                        <div className='pt-4 flex justify-end gap-2'>
                            <ModifiedText>{post.modified}</ModifiedText>
                            <DateText>{post.date}</DateText>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div> 
  )
}

export default PostBox

