import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Checkbox = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="inline-flex items-center">
            <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
            >
                <motion.input
                    type="checkbox"
                    initial={false}
                    animate={active ? 'active' : 'inactive'}
                    variants={{ 
                        active: {
                            backgroundColor: 'rgb(236 72 153 / 1)',
                            borderColor: 'rgb(236 72 153 / 1)',
                        },
                        inactive: {
                            backgroundColor: '#fff',
                            borderColor: 'rgb(107 114 128 / 1)'
                        }
                        }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative h-5 w-5 cursor-pointer appearance-none rounded-sm border transition-all"
                    id="checkbox"
                    checked={active}
                    onChange={() => setActive((prevState) => !prevState)}
                />

                <AnimatePresence>
                    {active && (
                        <div 
                            className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white"
                        >
                            <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        type: "tween",
                                        ease: "easeOut",
                                        duration: 0.3,
                                    }}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    )}
                </AnimatePresence>
            </label>
        </div>
    );
};