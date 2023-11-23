'use client'
import {motion} from "framer-motion"
import bgImage from "public/backgroundImage.jpg"
import Image from "next/image";
import {useState} from "react";
import {SearchBar} from "@/components/SearchBar";
import {BlueOverlay} from "@/components/BlueOverlay";
import axios from "axios"
import {usePathname} from "next/navigation";


export default function Home() {

  const [query, setQuery] = useState<string>("");

  const pathname = usePathname();
  async function SendForm(text: string) {
    axios.post(`${pathname}/search?=${text}`, text)
    .then((r) => console.log(r))
  }

  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2, delay: .25}} className="relative w-full h-screen">
      <Image src={bgImage} alt="Background Image" className="w-full h-full object-cover" />
      <BlueOverlay />

      <form onSubmit={() => SendForm(query)}>
        <SearchBar searchBarChange={(e) => setQuery(e.target.value)} />
      </form>
    </motion.main>
  )
}