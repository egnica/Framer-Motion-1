"use client";
import React from "react";
import styles from "./page.module.css";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useState } from "react";
const page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const titleVariant = {
    start: {
      opacity: 0,
      x: -150,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const btnVariant = {
    start: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    hover: {
      scale: 1.1,
    },
    click: {
      scale: 0.9,
    },
  };

  const trioBoxVariant = {
    start: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    animate: {
      opacity: 1,
      height: 150,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  return (
    <>
      <div className={styles.page}>
        <motion.h1 variants={titleVariant} initial="start" animate="visible">
          Welcome to this Page
        </motion.h1>
        <motion.div
          variants={btnVariant}
          initial="start"
          animate="visible"
          whileHover="hover"
          whileTap="click"
          className={styles.button}
          onClick={() => setIsHidden(!isHidden)}
        >
          Click Here
        </motion.div>
      </div>
      <AnimatePresence>
        {isHidden && (
          <motion.div
            variants={trioBoxVariant}
            initial="start"
            animate="animate"
            exit="start"
            className={styles.revealContainer}
          >
            <motion.div>
              <p>Test1</p>
            </motion.div>
            <motion.div>
              <p>Test2</p>
            </motion.div>
            <motion.div>
              <p>Test3</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default page;
