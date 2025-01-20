"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [visible, setVisible] = useState(false);

  const btnVariant = {
    start: {
      opacity: 0,
      scale: 0,
    },
    appear: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    hover: {
      scale: 1.1,
    },
    click: {
      scale: 0.9,
    },
  };

  const boxVariant = {
    hidden: {
      opacity: 0,
      rotate: "0deg",
      scale: 0,
      height: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      rotate: "360deg",
      scale: 1,
      height: 130,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <div>
        <motion.button
          className="example-button"
          onClick={() => setVisible(!visible)}
          variants={btnVariant}
          initial="start"
          animate="appear"
          whileHover="hover"
          whileTap="click"
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
          Show/Hide
        </motion.button>
        <br />
        <br />
        <br />
        <AnimatePresence mode="sync">
          {visible && (
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                width: 130,

                background: "blue",
              }}
            >
              motion
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default BasicsOfMotion;
