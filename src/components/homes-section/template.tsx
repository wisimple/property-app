import { HomeCardTemplate } from './home-card/template';
import styles from './styles.module.scss';
import { HomeInterface } from '@/types/home';

interface HomesSectionTemplateProps {
  homes: HomeInterface[];
}

export const HomesSectionTemplate = ({ homes }: HomesSectionTemplateProps) => {
  return (
    <div className={styles.container}>
      {homes.map((item, index) => (
        <HomeCardTemplate key={index} {...item} />
      ))}
    </div>
  );
};
