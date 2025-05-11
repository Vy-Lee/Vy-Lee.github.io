// src/components/WrittenComponent.js
import React from "react";
import styles from "./WrittenComponent.module.css"; // Component cho mỗi phần CC (CC1, CC2, CC3, CC4)

const Section = ({ title, content }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <p className={styles.sectionContent}>{content}</p>
  </section>
);

// Component chính cho WrittenComponent
export const WrittenComponent = () => {
  const writtenComponent = [
    {
      title: "CC1 - Beauty",
      content: `The "Becoming Spring" project explores the concept of emotional and personal growth 
        through the lens of nature’s quiet transformation. This project highlights the subtle beauty 
        of change and healing, showing how nature’s gradual shifts mirror our internal processes. 
        Through images of blossoming flowers, quiet moments in nature, and reflective poses of the subject, 
        the beauty of the natural world is captured in its purest form. The use of light, color, and soft tones 
        reflects the therapeutic, gentle nature of spring’s arrival.`,
    },
    {
      title: "CC2 - Image & Text",
      content: `This project connects the emotional journey of healing with the changing seasons. By using 
        photography as a narrative tool, I aim to evoke the emotions associated with mental health struggles, 
        recovery, and the peace that comes with nature’s gradual rebirth. The visual elements of the project 
        speak to the inner journey of healing, where the dark, harsh times are followed by moments of calm and 
        renewal, much like how spring slowly pushes through the remnants of winter. Through this work, I wanted to 
        offer a visual metaphor for the resilience of the human spirit.`,
    },
    {
      title: "CC3 - Staged Photography",
      content: `For the staged photography component, I used the symbolism of nature to represent the healing journey. 
        One of the key visual elements was the subject, dressed in a simple dress, walking barefoot across streams, 
        standing on fallen trees, and lying in the green underbrush—each pose representing a different stage in the 
        recovery process. The setting, natural light, and soft focus were all designed to evoke a sense of tranquility 
        and connection to the earth. These images challenge the viewer to pause and reflect on their own healing process 
        while grounding them in the beauty and resilience of nature.`,
    },
    {
      title: "CC4 - Photographic Series",
      content: `The "Becoming Spring" photo essay is a series that not only focuses on nature’s transformation but also 
        highlights the personal transformation that comes with emotional healing. Through a combination of staged shots 
        and candid moments, the series tracks the transition from struggle to serenity, from chaos to calm. The subjects, 
        captured in peaceful natural settings, are symbolic of the process of reclaiming one’s peace, with each photograph 
        offering a moment of introspection. The series aims to illustrate the deep, often unseen emotional labor that goes 
        into healing and the beauty that can emerge when one allows oneself to heal fully.`,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Vy Le</h2>
      <h2 className={styles.description}>PHOTO-254</h2>
      <h3 className={styles.subtitle}>Written Component</h3>
      <div className="">
        {writtenComponent.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};
