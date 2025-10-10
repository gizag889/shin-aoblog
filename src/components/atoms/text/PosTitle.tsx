import React, { Children, ReactNode } from 'react'

const PosTitle = ({children}: {
    children: ReactNode
}) => {
  return (
    <h2 className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>
        {children}
    </h2>
  )
}

export default PosTitle