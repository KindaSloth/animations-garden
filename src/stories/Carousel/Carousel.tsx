import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import useMeasure from "react-use-measure";
import { flushSync } from "react-dom";

const items: {
    id: number;
    image: string;
    title: string;
    description: string;
}[] = [
    {
        id: 0,
        image: "https://github.com/KindaSloth/animations-garden/blob/main/public/cherry-trees.jpeg?raw=true",
        title: "Cherry trees",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id: 1,
        image: "https://github.com/KindaSloth/animations-garden/blob/main/public/sunset.jpeg?raw=true",
        title: "The Coldest Sunset",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id: 2,
        image: "https://github.com/KindaSloth/animations-garden/blob/main/public/porsche.jpeg?raw=true",
        title: "Porsche",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    }
];

const lastItemIndex = items.length;

const Item = ({ currentItem, direction }: { 
    currentItem: {
        id: number;
        image: string;
        title: string;
        description: string;
    }; 
    direction: 'right' | 'left'; 
}) => {
    const [ref, { width }] = useMeasure();

    return (
        <div ref={ref} className="relative flex w-[416px] h-[512px] items-center justify-center overflow-hidden">
            <AnimatePresence>
                <motion.div 
                    className="absolute w-full h-full flex items-center justify-center" 
                    key={currentItem.id}
                    initial={{ x: direction === 'right' ? 1 * width : 1 * (-width) }}
                    animate={{ x: 0 }}
                    exit={{ x: direction === 'right' ? 1 * (-width) : 1 * width }}
                    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
                >
                    <div className="w-96 rounded shadow-lg">
                        <img className="w-full h-64" src={currentItem.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{currentItem.title}</div>
                            <p className="text-gray-700 text-base">
                                {currentItem.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pictures</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#landscape</span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export const Carousel = () => {
    const [currentItem, setCurrentItem] = useState<{
        id: number;
        image: string;
        title: string;
        description: string;
    }>(items[0]);
    const [direction, setDirection] = useState<'right' | 'left'>('right');

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex items-center">
                <ChevronLeft 
                    className="cursor-pointer"
                    size={24} 
                    onClick={() => {
                        flushSync(() => setDirection("left"));

                        if (currentItem.id === 0) {
                            setCurrentItem(items[lastItemIndex - 1]);
                            return;
                        }

                        setCurrentItem((prevState) => prevState ? items[prevState.id - 1] : items[0]);
                    }} 
                />
                <Item currentItem={currentItem} direction={direction} />
                <ChevronRight 
                    className="cursor-pointer"
                    size={24} 
                    onClick={() => {
                        flushSync(() => setDirection("right"));

                        if (currentItem.id === (lastItemIndex - 1)) {
                            setCurrentItem(items[0]);
                            return;
                        }

                        setCurrentItem((prevState) => prevState ? items[prevState.id + 1] : items[0]);
                    }} 
                />
            </div>
        </div>
    );
}