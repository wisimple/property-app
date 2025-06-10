import Image from 'next/image';
import styles from './styles.module.scss';

export const GallerySectionTemplate = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 14 }).map((_, index) => {
        const itemNumber = index + 1;
        return (
          <figure
            key={index}
            className={`${styles.item} ${styles[`item--${itemNumber}`]}`}
          >
            <Image
              src={`/img/gallery/${itemNumber}.jpeg`}
              width={640}
              height={480}
              alt={`Gallery Image`}
              className={styles.image}
            />
          </figure>
        );
      })}
    </div>
  );
};
