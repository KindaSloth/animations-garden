import * as React from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

type TooltipProps = {
    children: React.ReactNode;
}

export const Tooltip = ({ children }: TooltipProps) => {
    const [open, setOpen] = React.useState(false);

    const x = useMotionValue(0);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> | undefined = (event) => {
        const halfWidth = event.currentTarget.offsetWidth / 2;
        x.set(-(event.nativeEvent.offsetX - halfWidth));
    };

    return (
        <div className="relative w-fit" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} onMouseMove={handleMouseMove}>
            {children}
            
            <AnimatePresence>
                {open && (
                    <div className="absolute bottom-full mb-[2px] w-full left-1/2 transform -translate-x-1/2">
                        <motion.div 
                            className="w-full"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{
                                rotate: x
                            }}
                        >
                            <div className="relative w-full flex items-center justify-center">
                                <div className="flex items-start justify-center text-center w-full bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                                    Tooltip
                                    <svg className="absolute text-black h-3 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}