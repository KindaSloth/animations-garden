import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../../utils/cn";

const content = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est, quo impedit, ipsa eligendi excepturi in commodi aspernatur dignissimos asperiores adipisci corrupti maiores molestias fuga sequi cum explicabo temporibus earum!",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est, quo impedit, ipsa eligendi excepturi in commodi aspernatur dignissimos asperiores adipisci corrupti maiores molestias fuga sequi cum explicabo temporibus earum!",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est, quo impedit, ipsa eligendi excepturi in commodi aspernatur dignissimos asperiores adipisci corrupti maiores molestias fuga sequi cum explicabo temporibus earum!",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est, quo impedit, ipsa eligendi excepturi in commodi aspernatur dignissimos asperiores adipisci corrupti maiores molestias fuga sequi cum explicabo temporibus earum!",
  },
];

export const ScrollReveal = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [cardColor, setCardColor] = useState<'black' | 'white' | 'red' | 'orange'>('black');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress <= 0.25) {
        setCurrentIdx(0);
        setCardColor('black');
        return;
    }

    if (progress <= 0.5) {
        setCurrentIdx(1);
        setCardColor('white');
        return;
    }

    if (progress <= 0.75) {
        setCurrentIdx(2);
        setCardColor('red');
        return
    }

    setCurrentIdx(3);
    setCardColor('orange');
  });

  return (
    <div
      className="h-[30rem] overflow-y-scroll flex justify-center space-x-10 rounded-md p-10 bg-gray-500"
      ref={scrollContainerRef}
    >
      <div className="div flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2 
                className="text-2xl font-bold text-slate-100"
                animate={{ opacity: currentIdx === index ? 1 : 0.25 }}
                transition={{ ease: "easeInOut" }}
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-kg text-slate-300 max-w-sm mt-10"
                animate={{ opacity: currentIdx === index ? 1 : 0.25 }}
                transition={{ ease: "easeInOut" }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "h-60 w-80 rounded-md sticky top-10 overflow-hidden"
        )}
        style={{ backgroundColor: cardColor }}
      />
    </div>
  );
};
