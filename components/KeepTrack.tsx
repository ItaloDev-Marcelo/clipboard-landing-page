import { keepTrackBlocksDataTp } from "@/types/KeepTrackBlocksDataTp"
import { ImageComputer } from "./util/Imagens"
import { TrackBlocks } from "./TrackBlocks"
import Image from 'next/image'

export const KeepTrack = () => {


  const keepTrackBlocksData:keepTrackBlocksDataTp[] = [
    {
        title: 'Quick Search',
        subInfo: '  Easily search your snippets by content, category, web address, application, and more.'
    },
    {
        title: 'iCloud Sync',
        subInfo: ' Instantly saves and syncs snippets across all your devices.'
    },
    {
        title: ' Complete History',
        subInfo: 'Retrieve any snippets from the first moment you started using the app.'
    }
  ]

  return (
    <section className="flex flex-col items-center justify-center text-center p-10 my-15 xl:my-8 2xl:my-10">
        <h2 className="text-[2em] xl:text-[2.5em] 2xl:text-[2.7em] text-gray-title text my-10 font-semibold">Keep track of your snippets</h2>
        <p className='text-gray-p text-[18px] xl:text-[15px] 2xl:text-[18px] tracking-wide mb-7 text-center xl:w-180 '>Clipboard instantly stores any item you copy in the cloud, 
  meaning you can access your snippets immediately on all <br className='xl:hidden' /> your 
  devices. Our Mac and iOS apps will help you organize everything.</p>
        <section className="flex flex-col items-center my-10 justify-center xl:flex-row xl:justify-between relative xl:-left-30 2xl:-left-35">
           <div className="py-10">
              <Image src={ImageComputer}  className="w-full w-max-200 h-auto"  alt='computer-image' />
           </div>
           <div className="xl:ml-20">
              {
                keepTrackBlocksData.map((item,index) => (
                    <TrackBlocks key={index} title={item.title } subInfo={item.subInfo} />
                ))
              }
           </div>
        </section>
    </section>
  )
}
