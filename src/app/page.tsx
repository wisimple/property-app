import { FeaturesSectionTemplate } from '@/components/features-section/template';
import styles from './page.module.css';
import { StoryContentTemplate } from '@/components/story-content/template';
import { StoryPicturesTemplate } from '@/components/story-pictures/template';
import { HomesSectionTemplate } from '@/components/homes-section/template';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>sidebar</div>
      <div className={styles.header}>header</div>
      <div className={styles.agents}>agents</div>
      <section className={styles.features}>
        <FeaturesSectionTemplate />
      </section>
      <section className={styles.homes}>
        <HomesSectionTemplate />
      </section>
      <div className={styles['story-pictures']}>
        <StoryPicturesTemplate />
      </div>
      <div className={styles['story-content']}>
        <StoryContentTemplate />
      </div>
      <div className={styles.gallery}>gallery</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
}
