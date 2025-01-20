import React from "react";
import { motion } from "framer-motion";

const VariantObjects = () => {
  // Define animation variants
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeIn" },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };
  return (
    <div>
      <motion.div
        variants={boxVariants} // Attach variants
        initial="hidden" // Start in the "hidden" state
        animate="visible" // Animate to the "visible" state
        whileHover="hover" // Apply "hover" state on hover
        style={{
          backgroundColor: "lightblue",
          width: 150,
          height: 150,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Hover Me!
      </motion.div>
    </div>
  );
};

export default VariantObjects;
