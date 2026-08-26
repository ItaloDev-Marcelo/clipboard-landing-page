import { TrackBlockTp } from "@/types/TrackBlockTp"

export const TrackBlocks = ({title, subInfo}:TrackBlockTp) => {
  return (
    <article className="flex flex-col items-center xl:items-start xl:text-left justify-center text-center p-5 w-85 md:w-110 xl:w-120">
        <h3 className="text-2xl mb-2 text-gray-title font-semibold">{title}</h3>
        <p className="text-gray-p">{subInfo}</p>
    </article>
  )
}
