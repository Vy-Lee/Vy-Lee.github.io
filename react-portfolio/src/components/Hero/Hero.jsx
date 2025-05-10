import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vy Le</h1>
        <p className={styles.description}>
          I capture emotions through photography — telling stories that words
          often can’t express.
        </p>
        {/* <a
          href="https://drive.google.com/file/d/1ar66ZPt8j4EOZcJa_5Iqts7owHCJWdLG/view?usp=sharing"
          className={styles.contactBtn}
        >
          Get Resume
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/wearebears.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
