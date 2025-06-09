import { ComponentType } from 'react';
import styles from './styles.module.scss';

interface FeatureSectionCardTemplateProps {
  IconElement: ComponentType<{ className?: string }>;
  heading: string;
  text: string;
}

export const FeatureSectionCardTemplate = ({
  IconElement,
  heading,
  text,
}: FeatureSectionCardTemplateProps) => {
  return (
    <div className={styles.container}>
      <IconElement className={styles.icon} />
      <h4 className='heading-4 color-dark'>{heading}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
