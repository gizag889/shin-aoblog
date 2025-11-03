import React, { Children } from 'react'

import { Klee_One } from 'next/font/google';

// const klee = Klee_One({
//     weight: ['400', '600'],
//     subsets: ['latin'],
//     variable: '--klee-one',
//     display: 'swap'

// })

const PostContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default PostContent