import React from 'react'

const AboutBox = () => {
  return (
    <div className='w-70'>
        <div>
            <div className='rounded-t-2xl bg-[#0C0C0C] border-1 border-(--color-divider-main) '>
                <div className='text-center py-2'>青柳のブログとは</div>
            </div>
            <div  className='flex gap-4 p-4 bg-(--color-background-default) border-1 border-(--color-divider-main) rounded-b-2xl'>
                <img src="/icon.svg" alt="アイコンの画像"/>
                <div>このブログでは主にweb制作や読書記録などについて載せていきます。</div>
            </div>
        </div>
    </div>
  )
}

export default AboutBox