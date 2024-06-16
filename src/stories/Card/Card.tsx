import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const PokemonCard = () => {
  const [state, setState] = useState<'back' | 'front' | null>('back');

  return (
    <>
      <AnimatePresence initial={false} onExitComplete={() => setState('front')}>
        {state === 'back' && (
          <motion.div
            className="overflow-hidden rounded-md w-96 p-2 h-[600px] bg-black flex items-center justify-center text-center"
            onMouseOver={() => setState(null)}
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <p className="text-white text-lg font-bold">Hover me</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => setState('back')}>
        {state === 'front' && (
          <motion.div
            id="pokemon_card"
            className="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md w-96 p-2 h-[600px] flex flex-col"
            onMouseOut={() => setState(null)}
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.35,  delay: 0.1  }}
          >
            <div>
              <h3 className="text-left pb-4 pt-2 text-xl font-bold">
                Charmander
              </h3>
            </div>

            <div className="flex items-center justify-center bg-[#2a2a2a] min-h-[200px]">
              <a
                className="flex items-center justify-center"
                href="#"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="https://github.com/KindaSloth/animations-garden/blob/main/public/charmander.png?raw=true"
                  alt="Charmander"
                  className=" object-cover"
                />
              </a>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-4 pr-0 text-lg col-span-3">
                <h4 className="font-bold">Charmander:</h4>

                <p className="text-sm font-medium">
                  Charmander is a Fire type Pokémon introduced in Generation 1.
                </p>

                <div className="bg-transparent h-1" />

                <p className="text-sm font-medium">
                  Charmander is a bipedal, reptilian Pokémon.
                </p>
              </div>
              <div className="col-span-1 pt-4">
                <div className="w-20 h-20 shadow-inner shadow-[#2a2a2a] mt-auto ml-auto flex flex-col items-center justify-center">
                  <p className="text-semibold text-xl">
                    12 <br /> HP
                  </p>
                </div>
                <div className="mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center">
                  <p className="text-semibold text-xl">
                    16 <br /> ATP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
