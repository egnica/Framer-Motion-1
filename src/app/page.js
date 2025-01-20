"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

import Box from "./elements/Box-demo.jsx";
import BasicsOfMotion from "./elements/BasicsOfMotion.jsx";
import VariantObjects from "./elements/VariantObjects";
import Gestures from "./elements/Gestures.jsx";

export default function Home() {
  const ptagVariant = {
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
        <motion.p variants={ptagVariant} initial="hidden" animate="visible">
          <br />
          Variants for Organized Animations
        </motion.p>
        <br />
        <VariantObjects />
        <br />
        <Gestures />
      </div>
      <div className={styles.page}></div>
    </>
  );
}
