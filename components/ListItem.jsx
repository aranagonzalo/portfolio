import React from 'react'
import { motion } from 'framer-motion'

const ListItem = ({borderStyle, borderColor, text}) => {
  return (
    <motion.li initial={{fontSize: "16px", y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} whileHover={{fontSize: "17px", fontWeight: 600}} className={`py-1 px-8 ${borderStyle} ${borderColor} text-custom-black font-normal cursor-pointer hover:text-lg hover:font-medium`}>{text}</motion.li>
  )
}

export default ListItem