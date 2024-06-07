import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useState } from 'react';

export const Toogle = () => {
    const [active, setActive] = useState(true);

    return (
        <AnimatePresence>
            <div className='relative flex h-8 w-max items-center rounded-md bg-black sm:w-fit'>
                <button className='relative z-10 px-6 py-1.5' onClick={() => setActive(true)}>
                    <p className={cn('flex items-center gap-2 text-xs font-medium text-black', !active && 'text-white')}>On</p>
                </button>
                <button className='relative z-10 px-6 py-1.5' onClick={() => setActive(false)}>
                    <p className={cn('flex items-center gap-2 text-xs font-medium text-white', !active && 'text-black')}>Off</p>
                </button>
                <div className={cn('absolute inset-0 z-0 flex justify-start', !active && 'justify-end')}>
                    <motion.span 
                        layout 
                        transition={{ type: 'spring', damping: 20, stiffness: 250 }} 
                        className={cn('h-full w-1/2 rounded-[3px] bg-white')}
                    />
                </div>
            </div>
        </AnimatePresence>
    );
};