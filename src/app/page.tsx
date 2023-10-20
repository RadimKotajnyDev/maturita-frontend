'use client'
import {motion} from "framer-motion"
import bgImage from "public/backgroundImage.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, delay: .25}} className="relative w-full h-screen">
      <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral opacity-90"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <p className="font-light text-xl md:text-4xl">Vyhledávač maturnitních / ročníkových prací </p>
          <input type="text"
                 placeholder="Zadejte klíčové slovo, autora či název práce"
                 className="input input-bordered input-md md:input-lg w-full max-w-lg"/>
        </div>
      </div>
    </motion.main>
  )
}

/*


      <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, delay: .25}}
        className="grid grid-flow-col grid-rows-4 h-screen w-full justify-center bg-bgImage bg-cover">
      <span className="row-span-2 justify-end flex flex-col items-center gap-3">
<p className="font-light text-4xl">Vyhledávač maturnitních / ročníkových prací </p>
<input type="text"
       placeholder="Zadejte klíčové slovo, autora či název práce"
       className="input input-bordered input-lg w-full max-w-lg"/>
</span>
<div className="absolute inset-0 bg-neutral opacity-90"></div>
</motion.main>


*/
