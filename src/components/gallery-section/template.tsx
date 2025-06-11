import Image from 'next/image';
import styles from './styles.module.scss';

interface GallerySectionTemplateProps {
  images: { src: string; alt: string }[];
}

export const GallerySectionTemplate = ({
  images,
}: GallerySectionTemplateProps) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        const itemNumber = index + 1;
        return (
          <figure
            key={index}
            className={`${styles.item} ${styles[`item--${itemNumber}`]}`}
          >
            <Image
              src={image.src}
              width={640}
              height={480}
              alt={image.alt}
              className={styles.image}
            />
          </figure>
        );
      })}
    </div>
  );
};
