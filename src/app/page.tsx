'use client'
import {motion} from "framer-motion"
import bgImage from "public/backgroundImage.jpg"
import Image from "next/image";
import {useEffect, useState} from "react";
import {SearchBar} from "@/components/SearchBar";
import {BlueOverlay} from "@/components/BlueOverlay";

export default function Home() {

  const [query, setQuery] = useState<string>();
  useEffect(() => {
    console.log(query)
  }, [query])

  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, delay: .25}} className="relative w-full h-screen">
      <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover" />

      <BlueOverlay />

      <SearchBar searchBarChange={(e) => setQuery(e.target.value)} />
    </motion.main>
  )
}