import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

export const Accordion = () => {
    const [open, setOpen] = useState(false);
    const [ref, bounds] = useMeasure();

    return (
        <div className='w-96 p-4 rounded-sm border border-teal flex flex-col'>
            <div className='w-full flex items-center justify-between cursor-pointer' onClick={() => setOpen((prevState) => !prevState)}>
                <p>Title</p>
                {open ? <ChevronUp /> : <ChevronDown />}
            </div>

            <motion.div
                animate={{ height: open && bounds.height > 0 ? bounds.height : 0 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.8, delay: open ? 0 : 0.5 }}
            >
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            ref={ref}
                            className='mt-2'
                        >
                            <p
                                className='text-sm font-medium'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem, assumenda tempore quia eveniet repudiandae fugiat labore molestias ratione, nisi porro dicta ea ex vero error nam unde esse dolorum.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}