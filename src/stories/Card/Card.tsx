import { motion } from 'framer-motion'
import { useState } from 'react'

export const Card = () => {
    const [isHovered, setHover] = useState(false);

    return (
        <div className="relative w-[400px] h-[200px] bg-pink-500 rounded-md">
            <motion.div 
                className="absolute w-full h-full flex flex-col gap-4 p-4 justify-center bg-white border border-gray-300 rounded hover:cursor-pointer"
                initial={{ x: 0, y: 0 }}
                animate={{ x: isHovered ? -4 : 0, y: isHovered ? -4 : 0 }}
                transition={{ ease: "easeOut" }}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quod quisquam ullam nobis fuga dolorem. Accusantium, numquam. Officiis placeat quia omnis architecto et, sint repudiandae sed, nostrum totam eligendi at?</p>
            </motion.div>
        </div>
    )
}