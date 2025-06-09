import { FeatureSectionCardTemplate } from './card/template';
import { featureSectionItems } from './items';
import styles from './styles.module.scss';

export const FeaturesSectionTemplate = () => {
  return (
    <div className={styles.container}>
      {featureSectionItems.map((item, index) => (
        <FeatureSectionCardTemplate key={index} {...item} />
      ))}
    </div>
  );
};
