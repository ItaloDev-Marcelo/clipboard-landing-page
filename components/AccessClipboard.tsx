import Image from 'next/image'
import { ImageDevices } from './util/Imagens'

export const AccessClipboard = () => {
  return (
    <section className='flex flex-col items-center text-center content-center'>
       <div className='p-5 xl:p-10 2xl:p-5'> 
        <h2 className='text-[2em] xl:text-[2.5em] 2xl:text-[2.7em] text-gray-title text my-5 font-semibold'>Access Clipboard anywhere</h2>
        <p className='text-gray-p text-[18px] xl:text-[15px] 2xl:text-[18px] tracking-wide px-5 mb-7 xl:w-190 '>Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks.</p>
       </div>

       <div className='my-7 p-5 xl:p-0'>
         <Image src={ImageDevices} className='w-full xl:w-max-200 ' alt='devices image'/>
       </div>

    </section>
  )
}
