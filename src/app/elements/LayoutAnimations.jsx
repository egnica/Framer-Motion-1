"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const LayoutAnimations = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <motion.div
        layout // Enables layout animation
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: "lightblue",
          borderRadius: "15px",
          padding: "20px",
          width: isExpanded ? "300px" : "150px", // Dynamic width
          height: isExpanded ? "200px" : "100px", // Dynamic height
          display: "grid",
          placeContent: "center",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        {isExpanded ? "Click to Shrink" : "Click to Expand"}
      </motion.div>
    </>
  );
};

export default LayoutAnimations;
