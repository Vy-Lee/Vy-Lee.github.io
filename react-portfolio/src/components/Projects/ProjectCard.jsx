import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, images },
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const descriptionArray = Array.isArray(description)
    ? description
    : [description];
  // Hàm để mở hình ảnh trong modal
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // Hàm để đóng modal khi nhấn vào hình
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>
        {descriptionArray.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index !== descriptionArray.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>

      {/* Hiển thị các hình ảnh bổ sung từ mảng 'images' */}
      {images && images.length > 0 && (
        <div className={styles.imagesGallery}>
          {images.map((image, index) => (
            <img
              key={index}
              src={getImageUrl(image.src)}
              alt={image.alt}
              className={styles.image}
              onClick={() => handleImageClick(getImageUrl(image.src))}
            />
          ))}
        </div>
      )}

      {/* Modal hiển thị khi hình ảnh được chọn */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Selected"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};
