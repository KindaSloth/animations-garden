import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import { cn } from "../../utils/cn";

export const Modal = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button 
                onClick={() => setOpen(true)}
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Open
            </button>

            <AnimatePresence>
                {open && (
                    <div className='absolute w-screen h-screen flex items-center justify-center z-50'>
                        <motion.div 
                            initial={{ opacity: 0.1, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                            className={cn(
                                "w-[500px] h-96 p-6",
                                "bg-white border border-gray-300 rounded-md shadow-2xl"
                            )}
                        >
                            <div className="flex flex-col justify-between w-full h-full">
                                <h1>Title</h1>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit aperiam blanditiis doloribus provident repudiandae, temporibus qui et voluptas laborum quos ut sed adipisci, dolores eius officia pariatur unde esse!</p>

                                <div className="flex gap-2 self-end">
                                    <button 
                                        className="middle none center rounded-lg bg-gray-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        onClick={() => setOpen(false)}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}