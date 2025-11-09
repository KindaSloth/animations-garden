import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { useIsMobile } from "../../utils/useIsMobile";
import { createPortal } from "react-dom";

export const Dialog = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [dialogRef, dialogAnimate] = useAnimate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Open
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={dialogRef}
              drag={isMobile ? "y" : undefined}
              dragDirectionLock
              dragConstraints={{ top: 0, bottom: 384 }}
              dragMomentum={false}
              dragElastic={0}
              onDragEnd={(_, info) => {
                if (info.point.y >= 500) {
                  setOpen(false);
                } else {
                  dialogAnimate(dialogRef.current, {
                    y: 0,
                  });
                }
              }}
              initial={
                isMobile
                  ? { opacity: 0.8, y: 384 }
                  : { opacity: 0.5, scale: 0.9 }
              }
              animate={
                isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }
              }
              exit={
                isMobile
                  ? { opacity: 0.8, y: 384 }
                  : { opacity: 0.5, scale: 0.9 }
              }
              transition={
                isMobile
                  ? {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      bounce: 0,
                    }
                  : { ease: "easeInOut", duration: 0.2 }
              }
              className={cn(
                "fixed z-50 bottom-0 left-0 sm:bottom-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
                "w-full sm:w-[500px] h-96 p-6",
                "bg-white border border-gray-300 rounded-t-xl sm:rounded-t-md sm:rounded-md shadow-2xl"
              )}
            >
              <div className="flex flex-col justify-between w-full h-full">
                <h1>Title</h1>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  impedit aperiam blanditiis doloribus provident repudiandae,
                  temporibus qui et voluptas laborum quos ut sed adipisci,
                  dolores eius officia pariatur unde esse!
                </p>

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
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
