import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="p-6">
                <button className="appearance-none border rounded-full p-2 border-teal" onClick={() => setOpen(true)}>
                    <Menu size={16} />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "384px", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
                        className="absolute left-0 top-0 h-screen z-50 p-6 bg-gray-800 text-white min-h-screen flex flex-col gap-8"
                    >
                        <div className="flex self-end">
                            <X className="cursor-pointer" onClick={() => setOpen(false)} />
                        </div>
                        <nav>
                            <ul className="space-y-2">
                                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                                    <div className="flex items-center">
                                        <i className="mr-2"></i>
                                            <span>About</span>
                                        </div>
                                    <i className="text-xs"></i>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                                    <div className="flex items-center">
                                        <i className="mr-2"></i>
                                            <span>Dashboard</span>
                                        </div>
                                    <i className="text-xs"></i>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer">
                                    <div className="flex items-center">
                                        <i className="mr-2"></i>
                                            <span>SignOut</span>
                                        </div>
                                    <i className="text-xs"></i>
                                </div>
                            </ul>
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    )
}
