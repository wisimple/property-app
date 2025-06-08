import { FeatureSectionCardTemplate } from './card/template';
import styles from './styles.module.css';

export const FeaturesSectionTemplate = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <FeatureSectionCardTemplate key={index} />
      ))}
    </div>
  );
};
