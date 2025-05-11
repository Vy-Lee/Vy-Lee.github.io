import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.title}>About Me</div>
      <div className={styles.content}>
        <div className={styles.aboutTextContainer}>
          <p className={styles.aboutText}>
            Hi! My name is Vy. I'm currently a Digital Media Production student;
            besides editing video and filming, I also have a passion for
            photography. I first discovered my passion for photography back in
            middle school when I began capturing the world around me — from
            landscapes to everyday objects. In those early days, I was drawn to
            the quiet beauty in ordinary things.
          </p>
          <p className={styles.aboutText}>
            Over time, however, I found myself becoming fascinated by people.
            Portraiture gave me the ability to convey deeper, more complex
            emotions, especially through close-up images that focus on facial
            expressions or specific parts of the body. These subtle details
            allow the viewer to form a more personal and emotional connection
            with the image.
          </p>
          <p className={styles.aboutText}>
            Photography has not only become a creative outlet for me but also a
            way to better connect with the people, places, and objects that
            surround me. It helps me observe more closely, feel more deeply, and
            express what often goes unspoken.
          </p>
        </div>
      </div>
    </section>
  );
};
