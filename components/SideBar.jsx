"use client"
import { motion } from 'framer-motion'
import { Github, Facebook, Linkedin } from 'lucide-react'


const SideBar = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-12">
        <motion.a target="_blank" href="https://github.com/aranagonzalo" initial={{padding: "1rem", y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} className="hover:bg-custom-white/60 hover:border-yellow-500 bg-yellow-500 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur bg-custom-white/70 border-2 border-custom-black rounded-lg p-4">
            <Github fill="#fdfffc"/>
        </motion.a>
        <motion.a target="_blank" href="https://linkedin.com/in/aranagonzalo" initial={{padding: "1rem", y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} className="hover:bg-custom-white/60 hover:border-red-500 bg-red-500 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur bg-custom-white/70 border-2 border-custom-black rounded-lg p-4 my-36">
            <Linkedin fill="#fdfffc"/>   
        </motion.a>
        <motion.a target="_blank" href="https://facebook.com/gonzalo.arana.33" initial={{padding: "1rem", y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} className="hover:bg-custom-white/60 hover:border-green-500 bg-green-500 hover:shadow-custom-black/20 flex items-center justify-center cursor-pointer shadow-lg shadow-black/[0.05] backdrop-blur bg-custom-white/70 border-2 border-custom-black rounded-lg p-4">
            <Facebook fill="#fdfffc"/>
        </motion.a>
    </div>
  )
}

export default SideBar