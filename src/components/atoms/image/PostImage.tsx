import Image from "next/image";

import React from 'react'

const PostImage = ({ src, alt}: {
    src: string,
    alt: string,
}) => {
  return (
    <div className={`relative w-full h-56  ob`}>
            <Image
                src={src}
                alt={alt}
                fill
                className=" rounded-t-lg"
                 />
        </div>
  )
}

export default PostImage