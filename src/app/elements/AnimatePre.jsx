"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AnimatePre = () => {
  const [isVisible, setIsVisible] = useState(false);

  const VariantObjectBtn = {
    introBtn: {
      opacity: 0,
      scale: 0,
      x: 200,
      transition: { duration: 1 },
    },
    animateBtn: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hoverBtn: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
    clickBtn: {
      scale: 0.8,
      transition: { duration: 0.3 },
    },
    intro: {
      opacity: 0,
      y: 200,
      transition: { duration: 1 },
      height: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
      height: 150,
    },
  };

  const VariantBox = {};

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        variants={VariantObjectBtn}
        initial="introBtn"
        animate="animateBtn"
        whileHover="hoverBtn"
        whileTap="clickBtn"
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "10px 20px",
          background: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: 150,
        }}
      >
        Toggle Box
      </motion.button>
      <br />
      <br />
      {/* Animated Box */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            
            variants={VariantObjectBtn}
            initial="intro"
            animate="animate"
            exit="intro"
            style={{
              backgroundColor: "lightcoral",
              width: 150,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "bold",
             
            }}
          >
            Hello!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatePre;
