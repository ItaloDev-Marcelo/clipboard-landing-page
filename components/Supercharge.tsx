import Image from "next/image"
import BlocksSuper from "./BlocksSuper"
import { IconBlackList, IconPreview, IconText, LogoGoogle, LogoHp, LogoIbm, LogoMicrosoft, LogoVector } from "./util/Imagens"
import { BtnRow } from "./BtnRow"

export const Supercharge = () => {

 const SuperchargeBlocksData = [
    {
        icon: IconBlackList,
        title: ' Create blacklists',
        text: ' Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
    },
    {
        icon: IconText,
        title: 'Plain text snippets',
        text: 'Remove unwanted formatting from copied text for a consistent look.'
    },
    {
        icon: IconPreview,
        title: 'Sneak preview',
        text: 'Quick preview of all snippets on your Clipboard for easy access.'
    }
 ]

 const Companies = [LogoGoogle, LogoIbm,LogoMicrosoft,LogoHp,LogoVector]

  return (
    <section className='flex flex-col items-center justify-center content-center'>
        <div className="text-center px-3 xl:px-5 xl:py-2 2xl:py-4 ">
            <h2 className="text-[2em]  xl:text-[2.7em] text-gray-title text my-5 font-semibold">Supercharge your workflow</h2>
            <p className='text-gray-p text-[18px] tracking-wide px-5 mb-7 xl:w-190 '>We’ve got the tools to boost your productivity</p>
        </div>

        <div className="flex flex-col items-center justifty-center content-center gap-20 my-4 xl:my-2 2xl:my-4 ">
        <div className="flex flex-col mt-15 xl:mt-17 2xl:mt-25 gap-5 items-center justify-center xl:flex-row">
            {
                SuperchargeBlocksData.map((item,index) => (
                    <BlocksSuper key={index} icon={item.icon} title={item.title} text={item.text} />
                ))
            }
        </div>

        <div className="flex flex-col items-center 2xl:scale-120 mt-15 xl:my-15 2xl:my-20 xl:flex-row gap-y-20 xl:gap-10">
            {
                Companies.map((item, index)=> (
                    <Image key={index} src={item} className="shrink-0 h-auto" alt='company logo' /> 
                ))
            }
        </div>
        </div>

        <section className="gap-5 text-center my-20 p-5 xl:mt-15 2xl:mt-30 ">
           <h2 className="text-[2em] xl:text-[2.7em] text-gray-title text my-5 font-semibold">Clipboard for iOS and Mac OS</h2>
           <p className='text-gray-p text-[18px] tracking-wide px-5 mb-7 xl:w-190 '>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.</p>
           <BtnRow/>
        </section>
    </section>
  )
}

