"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Box from "./elements/Box-demo.jsx";
import { motion } from "framer-motion";

import BasicsOfMotion from "./elements/BasicsOfMotion.jsx";

export default function Home() {
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

  const ptagVarent = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className={styles.page}>
        <Box />
        <br />
        <BasicsOfMotion />
      </div>
      <div className={styles.page}>
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          {/* Animated Box */}
          <motion.div
            initial={{ opacity: 0, z: -100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            style={{
              backgroundColor: "lightcoral",
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          >
            Box 1
          </motion.div>

          {/* Another Animated Box */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundColor: "lightgreen",
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          >
            Box 2
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{}}
          transition={{ duration: 1 }}
        >
          Welcome
        </motion.h1>
        <br />
        <br />
        <motion.p variants={ptagVarent} initial="hidden" animate="visible">
          Variants for Organized Animations
        </motion.p>
        <br />

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
    </>
  );
}
