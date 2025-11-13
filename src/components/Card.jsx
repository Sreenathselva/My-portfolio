import { motion, useMotionValue, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const Card = ({ style, text, image, dragConstraints }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cardRef = useRef(null);

  // keep original position for reset
  const originalX = style?.left || 0;
  const originalY = style?.top || 0;

  useEffect(() => {
    let timeout;

    const checkBounds = () => {
      const container = document.querySelector(".card-container");
      const card = cardRef.current;
      if (!container || !card) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const isOutside =
        cardRect.right < containerRect.left ||
        cardRect.left > containerRect.right ||
        cardRect.bottom < containerRect.top ||
        cardRect.top > containerRect.bottom;

      if (isOutside) {
        // clear previous timer if any
        clearTimeout(timeout);

        // set 4s timeout to return to original pos
        timeout = setTimeout(() => {
          controls.start({
            x: 0,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 18 },
          });
        }, 4000);
      }
    };

    const unsubX = x.on("change", checkBounds);
    const unsubY = y.on("change", checkBounds);

    return () => {
      unsubX();
      unsubY();
      clearTimeout(timeout);
    };
  }, [x, y, controls]);

  const MotionComponent = image && !text ? motion.img : motion.div;

  return (
    <MotionComponent
      ref={cardRef}
      className={`absolute cursor-grab ${
        image
          ? "w-20"
          : "px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-48"
      }`}
      src={image}
      style={{ ...style, x, y }}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={dragConstraints}
      animate={controls}
    >
      {text}
    </MotionComponent>
  );
};

export default Card;
