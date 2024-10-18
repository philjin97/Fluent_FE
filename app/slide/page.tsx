"use client";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";
import Today from "../../components/Today/Today";
import TodayReadCalender from "../../components/TodayReadcalendar";

export default function App() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const x = useMotionValue(0);
  const [classes, setClasses] = useState([]);

  const slides = [
    {
      id: 0,
      content: "1",
      component: <TodayReadCalender dates={classes} />,
      background: "rgba(132, 93, 28, 1)",
    },
    {
      id: 1,
      content: "2",
      component: <Today />,
      background: "rgba(169, 172, 174, 1)",
    },
  ];

  const showNextSlide = () => {
    if (visibleIndex < slides.length - 1) {
      setDirection("next");
      setVisibleIndex((prev) => prev + 1);
    }
  };

  const showPrevSlide = () => {
    if (visibleIndex > 0) {
      setDirection("prev");
      setVisibleIndex((prev) => prev - 1);
    }
  };

  const slideVariants = {
    hidden: (direction: "next" | "prev") => ({
      x: direction === "next" ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="overflow-hidden h-screen w-screen flex justify-center items-center flex-col">
      <motion.div
        className="absolute inset-0 flex justify-center items-center flex-col"
        style={{ background: slides[visibleIndex].background }}
        animate={{ transition: { duration: 0.3 } }}
      >
        <AnimatePresence custom={direction}>
          {slides.map((slide, i) =>
            i === visibleIndex ? (
              <motion.div
                className="absolute w-[45vmin] h-[45vmin] bg-white rounded-[4vmin] flex justify-center items-center text-[10vmin] shadow-lg cursor-pointer"
                key={slide.id}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
                drag="x"
                dragSnapToOrigin
                onDragEnd={(event, info) => {
                  if (
                    info.offset.x < 0 &&
                    Math.abs(info.offset.x) >= window.innerWidth / 4
                  ) {
                    showNextSlide();
                  } else if (
                    info.offset.x > 0 &&
                    info.offset.x >= window.innerWidth / 4
                  ) {
                    showPrevSlide();
                  }
                }}
              >
                <span>{slide.component}</span>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center items-center w-full gap-[5vmin]">
        <button
          type="button"
          className={`block  w-[2rem] h-[2rem] rounded-[1vmin] border-0 bg-white/80 text-[3vmin] cursor-pointer text-[#1a1a1a] ${
            visibleIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-80"
          }`}
          onClick={showPrevSlide}
          disabled={visibleIndex === 0}
        >
          ᴘʀᴇᴠ
        </button>
        <button
          type="button"
          className={`block w-[2rem] h-[2rem] rounded-[1vmin] border-0 bg-white/80 text-[3vmin] cursor-pointer text-[#1a1a1a] ${
            visibleIndex === slides.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "opacity-80"
          }`}
          onClick={showNextSlide}
          disabled={visibleIndex === slides.length - 1}
        >
          ɴᴇxᴛ
        </button>
      </div>
    </div>
  );
}
