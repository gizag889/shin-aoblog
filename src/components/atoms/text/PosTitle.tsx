import React, { Children, ReactNode } from 'react'

const PosTitle = ({children}: {
    children: ReactNode
}) => {
  return (
    <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>
        {children}
    </div>
  )
}

export default PosTitle