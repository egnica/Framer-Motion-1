"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Box from "./elements/Box-demo.jsx";
import { motion } from "framer-motion";
import Variant from "./elements/VariantObjects";

import BasicsOfMotion from "./elements/BasicsOfMotion.jsx";
import VariantObjects from "./elements/VariantObjects";

export default function Home() {
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
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{}}
          transition={{ duration: 1 }}
        >
          Welcome
        </motion.h1>
        <br />
        <Box />
        <br />
        <BasicsOfMotion />
        <br />
        <motion.p variants={ptagVarent} initial="hidden" animate="visible">
          <br />
          Variants for Organized Animations
        </motion.p>
        <br />
        <VariantObjects />
      </div>
      <div className={styles.page}>
        <div style={{ display: "flex", gap: "20px" }}>
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
      </div>
    </>
  );
}
