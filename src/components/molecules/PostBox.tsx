import React from 'react'
// 
import PostListType from '../../types/PostListType'
import CommImage from '../atoms/image/CommImage'
import Link from 'next/link'
//component
import DateText from '../../components/atoms/text/DateText'
import PosTitle from '../../components/atoms/text/PosTitle'



const PostBox = ({ post }: {
    post: PostListType
}) => {
  return ( 
    <div className=' cursor-pointer  '>       
        {/* keyを削除 */}
        <div className='border-1 border-(--color-divider-main) hover:border-(--color-secondary-main) rounded-lg'>
            <div className='hover:text-(--color-secondary-main)'>
                <Link href={`/post/${post.slug}`}>
                    <CommImage 
                        src={post.featuredImage?.url} 
                        alt={post.title}
                    /> 
                    <div className='p-4'>
                        <PosTitle>{post.title}</PosTitle>
                        <DateText>{post.date}</DateText>
                    </div>
                </Link>
            </div>
        </div>
    </div> 
  )
}

export default PostBox

