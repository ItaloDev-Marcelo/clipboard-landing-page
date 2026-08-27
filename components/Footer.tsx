import Image from "next/image"
import { Logo } from "./util/Imagens"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {

  const FooterList = ['FAQs','Contact Us', 'Privacy Policy', 'Press Kit','Install Guide']
  
  return (
    <footer className="flex flex-col xl:flex-row mt-30 w-full h-140 xl:h-auto p-10 xl:p-15  bg-[#f5f6f8] items-center justify-center xl:justify-between content-center gap-25 xl:gap-2">
       <Image src={Logo} alt='Logo' className="w-14 xl:w-20 2xl:w-15" />
       <ul className=" w-165 h-30  xl:pt-5 xl:justify-between flex flex-col  items-center justify-center xl:flex-row gap-7 xl:flex-wrap text-center xl:items-baseline xl:text-left">
                <div>
                <li className='text-[18px] 2xl:text-2xl  mb-5 xl:mb-4 text-gray-title hover:text-green-btn'><a href='#'>{FooterList[0]} </a></li>
                <li className='text-[18px] xl:text-2xl text-gray-title hover:text-green-btn'><a href='#'>{FooterList[1]} </a></li>
                </div>
                <div>
                <li className='text-[18px] 2xl:text-2xl  mb-5 xl:mb-4 text-gray-title hover:text-green-btn'><a href='#'>{FooterList[2]} </a></li>
                <li className='text-[18px] 2xl:text-2xl text-gray-title hover:text-green-btn'><a href='#'>{FooterList[3]} </a></li>
                </div>
                <li className='text-[18px] 2xl:text-2xl text-gray-title hover:text-green-btn'><a href='#'>{FooterList[4]} </a></li>
       </ul>

       <ul className="flex flex-row  justify-center bg-red-500 items-center
        gap-x-2  mt-2 xl:mt-0">
         <li className="text-gray-title hover:text-green-btn cursor-pointer"><IoLogoFacebook  size={25} /></li>
         <li className="text-gray-title hover:text-green-btn cursor-pointer"><FaTwitter size={25} /></li>
         <li className="text-gray-title hover:text-green-btn cursor-pointer"><FaInstagram  size={25}/></li>
       </ul>
    </footer>
  )
}
