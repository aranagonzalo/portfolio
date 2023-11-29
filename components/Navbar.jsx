"use client"
import { motion } from 'framer-motion'
import ListItem from './ListItem'

const navbar = () => {
  return (
    <header className="z-[999] relative">
      <motion.nav initial={{y: -100, opacity: 0, translateX:"-50%"}} animate={{y: 0, opacity: 1, translateX:"-50%"}} className="fixed bg-custom-white/70 rounded-lg border-2 backdrop-blur border-custom-black shadow-lg shadow-black/[0.05] mt-2 top-4 m-auto left-1/2 -translate-x-1/2 p-2">
        <ul className="flex flex-row gap-0">
          <ListItem borderStyle="border-r-2" borderColor="border-green-500" text="About"/>
          <ListItem text="Proyects"/>
          <ListItem borderStyle="border-l-2" borderColor="border-green-500" text="Contact"/>
        </ul>
      </motion.nav>
    </header>
  )
}

export default navbar