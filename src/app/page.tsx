import { FeaturesSectionTemplate } from '@/components/features-section/template';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>sidebar</div>
      <div className={styles.header}>header</div>
      <div className={styles.agents}>agents</div>
      <section className={styles.features}>
        <FeaturesSectionTemplate />
      </section>
      <div className={styles.homes}>homes</div>
      <div className={styles['story-pictures']}>story pictures</div>
      <div className={styles['story-content']}>story content</div>
      <div className={styles.gallery}>gallery</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
}
