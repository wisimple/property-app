import { HomeCardTemplate } from './home-card/template';
import { homeItems } from './items';
import styles from './styles.module.scss';

export const HomesSectionTemplate = () => {
  return (
    <div className={styles.container}>
      {homeItems.map((item, index) => (
        <HomeCardTemplate {...item} />
      ))}
    </div>
  );
};
