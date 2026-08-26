import Button from './Button'

export const BtnRow = () => {
  return (
    <div className='flex flex-col xl:flex-row items-center justify-center mt-15 xl:mt-7 gap-5'>
        <Button style='w-[80%] xl:w-[40%] tracking-widest cursor-pointer  h-15 bg-green-btn rounded-full text-white hover:bg-[#5fcbbb] shadow-2xs ' title='Download for iOS' />
        <Button style='w-[80%] xl:w-[40%] tracking-widest cursor-pointer  h-15 bg-blue-btn rounded-full text-white hover:bg-[#8895ff] shadow-2xs  ' title='Download for Mac' />
    </div>
  )
}
