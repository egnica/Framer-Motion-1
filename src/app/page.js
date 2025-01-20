import Image from "next/image";
import styles from "./page.module.css";
import * as motion from "motion/react-client";
import Box from "./elements/Box-demo.jsx";
import BasicsOfMotion from "./elements/BasicsOfMotion.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <BasicsOfMotion />
    </div>
  );
}
