import {Logo } from './util/Imagens'
import { BtnRow } from './BtnRow'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='bg-[url(/bg-header-mobile.png)] bg-cover bg-center bg-no-repeat w-full h-auto lg:h-[50dvh] md:bg-[url(/bg-header-desktop.png)] flex flex-col items-center pb-6 justify-center p-1.5 text-center mb-15 xl:mb-20 2xl:mb-15'>
        <div className='my-10 xl:mt-30'><Image src={Logo} className='w-10 xl:w-15 2xl:w-20' alt='logo' /></div>
        <div>
       <div className='my-5'>
         <h1 className='text-[2em] xl:text-[2.5em] text-gray-title text font-semibold'> A history of <br className='xl:hidden'/> everything you copy</h1>
        <p className='text-gray-p text-[18px] xl:text-[15px] 2xl:text-[18px] tracking-wide px-5 mb-7'> Clipboard allows you to track and organize everything you 
  copy. Instantly <br className='hidden xl:block'/> access your clipboard on all your devices.</p>
       </div>
         <BtnRow />
        </div>
    </section>
  )
}
