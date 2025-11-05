import React from 'react'
import Link from 'next/link'

const PostNav = ({ slug }: { slug: string }) => {
    // 次/前投稿用の slug を生成（形式: "post<数字>" の数字を ±1）
	const nextSlug = slug?.replace(/^post(\d+)$/, (_match, num) => `post${Number(num) + 1}`) ?? "";
	const prevSlug = slug?.replace(/^post(\d+)$/, (_match, num) => `post${Number(num) - 1}`) ?? "";
  return (
    <div className="mt-10 flex justify-between">
        <Link href={prevSlug}>
            <div className='py-5 px-13 inline-block rounded-md border border-(--color-divider-main) bg-(--color-primary-main) shadow-(--shadow-md)'>
              前の記事
            </div>
        </Link>
        <Link href={nextSlug}>
               <div className='py-5 px-13 inline-block rounded-md border border-(--color-divider-main) bg-(--color-primary-main) shadow-(--shadow-md)'>
                 次の記事
              </div>
        </Link>
    </div>
  )
}

export default PostNav