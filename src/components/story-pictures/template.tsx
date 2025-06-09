import Image from 'next/image';
import styles from './styles.module.scss';

export const StoryPicturesTemplate = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/img/story-1.jpeg'
        alt='Couple with new house'
        className={styles['image-1']}
        height={600}
        width={600}
      />
      <Image
        src='/img/story-2.jpeg'
        alt='New house'
        className={styles['image-2']}
        height={600}
        width={600}
      />
    </div>
  );
};
