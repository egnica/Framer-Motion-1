"use client";
import React from "react";
import styles from "./page.module.css";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useState } from "react";
const page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isClicked, setIsClicked] = useState(null);

  const infoObject = {
    boxOne: {
      text1: "Some Text is being displayed 1-a",
      text2:
        "Some different text is being displayed 1-b. Adding more for a test",
    },
    boxTwo: {
      text1: "Some Text is being displayed 2-a",
      text2: "Some different text is being displayed 2-b",
    },
    boxThree: {
      text1: "Some Text is being displayed 3-a",
      text2: "Some different text is being displayed 3-b",
    },
  };
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
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgb(109, 109, 252)",
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

  const singleBoxVariant = {
    start: { opacity: 0 },
    hover: {
      scale: 1.1,
      rotate: "2deg",
      backgroundColor: "rgb(109, 109, 252)",
    },
    click: {
      scale: 0.9,
      rotate: 0,
    },
    animate: {
      rotateX: 180,
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
          onClick={() => {
            setIsHidden(!isHidden);
            setIsClicked(null);
          }}
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
            {Object.values(infoObject).map((values, index) => {
              return (
                <motion.div
                  layout
                  key={index}
                  variants={singleBoxVariant}
                  initial
                  animate={{
                    rotateY: isClicked == index ? 180 : 0,
                    backgroundColor:
                      isClicked == index
                        ? "rgb(61, 61, 250)"
                        : "rgb(163, 163, 254)",
                    cursor: isHidden ? "pointer" : "arrow",
                  }}
                  whileHover="hover"
                  whileTap="click"
                  onClick={() => {
                    isClicked == index
                      ? setIsClicked(null)
                      : setIsClicked(index);
                  }}
                >
                  {isClicked == null ? (
                    <p>{values.text1}</p>
                  ) : isClicked == index ? (
                    <motion.p
                      layout
                      animate={{
                        rotateY: isClicked == index ? 180 : 0,
                      }}
                    >
                      {values.text2}
                    </motion.p>
                  ) : (
                    <p>{values.text1}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <br />
      <motion.h1 variants={titleVariant} initial="start" animate="visible">
        This Text Below
      </motion.h1>
    </>
  );
};

export default page;
