import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

const cards = [
  {
    id: 1,
    title: "Card One",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptatum atque illo in dolorum sapiente commodi, iste optio, laudantium ab sit cumque dolor harum fugiat rerum ipsa aliquid, reprehenderit molestiae!",
  },
  {
    id: 2,
    title: "Card Two",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptatum atque illo in dolorum sapiente commodi, iste optio, laudantium ab sit cumque dolor harum fugiat rerum ipsa aliquid, reprehenderit molestiae!",
  },
  {
    id: 3,
    title: "Card Three",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptatum atque illo in dolorum sapiente commodi, iste optio, laudantium ab sit cumque dolor harum fugiat rerum ipsa aliquid, reprehenderit molestiae!",
  },
];

export const CardExpand = () => {
  const [currentCard, setCurrentCard] = useState<{
    id: number;
    title: string;
    description: string;
  } | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setCurrentCard(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="w-screen h-screen flex items-center justify-evenly">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            layoutId={`wrapper-${card.id}-${card.title}`}
            key={card.id + card.title}
            className="w-96 h-96 flex flex-col justify-between p-4 bg-white border border-gray-300 rounded-md"
          >
            <h1 className="text-lg font-bold">{card.title}</h1>
            <p className="text-base font-normal">{card.description}</p>
            <button
              className="flex self-end w-12 h-12 bg-white border border-pink-500 rounded-full items-center justify-center"
              onClick={() => setCurrentCard(card)}
            >
              +
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {currentCard && (
          <div
            className={cn(
              "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] p-4"
            )}
          >
            <motion.div
              className={cn(
                "relative w-full h-full flex flex-col items-center justify-center text-center gap-4",
                "bg-white border border-gray-300 rounded-md shadow-2xl"
              )}
              ref={wrapperRef}
              layoutId={`wrapper-${currentCard.id}-${currentCard.title}`}
            >
              <h1 className="text-2xl font-bold">{currentCard.title}</h1>
              <p className="text-base font-normal">{currentCard.description}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
