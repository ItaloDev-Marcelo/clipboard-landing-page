import { BlocksSuperTp } from '@/types/BlocksSuperTp'
import Image from 'next/image'


const BlocksSuper = ({icon,title,text}:BlocksSuperTp) => {
  return (
    <article  className='Blocks w-75 xl:w-85 flex gap-4 flex-col items-center justify-center text-center'>
        <div className='self-center py-2'>
            <Image src={icon} className='xl:w-15' alt='icon'/>
        </div>
        <h3 className='text-[1.1em] xl:text-[1.2em] font-semibold text-gray-title text my-5'>{title}</h3>
        <p className='text-gray-p text-[18px]'>{text}</p>
    </article>
  )
}

export default BlocksSuper