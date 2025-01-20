"use client";
import React from "react";
import { motion } from "framer-motion";

const Gestures = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ paddingTop: "30px" }}
    >
      {/* Drag Gesture */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        drag
        dragConstraints={{ top: -100, bottom: 180, left: -180, right: 180 }}
        dragElastic={0.2}
        whileDrag={{ scale: 1.2, backgroundColor: "#ff6961" }}
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
          cursor: "grab",
        }}
      >
        Drag Me!
      </motion.div>
      <br />

      {/* Hover Gesture */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#77dd77" }}
        style={{
          backgroundColor: "lightcoral",
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
      <br />
      {/* Tap Gesture */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        whileTap={{ scale: 0.9, rotate: -5, backgroundColor: "#fdfd96" }}
        style={{
          backgroundColor: "lightgreen",
          width: 150,
          height: 150,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Tap Me!
      </motion.div>
    </motion.div>
  );
};

export default Gestures;
