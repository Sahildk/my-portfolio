import { FaNodeJs } from "react-icons/fa6"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-[#339933]" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-[#47A248]" />
        </div>
      </div>
    </div>
  )
}

export default Technologies
