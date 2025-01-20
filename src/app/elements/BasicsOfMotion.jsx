"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <motion.button
          className="example-button"
          onClick={() => setVisible(!visible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          layout
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
              initial={{
                rotate: "0deg",
                scale: 0,
              }}
              animate={{
                rotate: "180deg",
                scale: 1,
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              style={{
                width: 150,
                height: 150,
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
