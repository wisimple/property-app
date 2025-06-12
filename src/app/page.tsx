import { FeaturesSectionTemplate } from '@/components/features-section/template';
import styles from './page.module.css';
import { StoryContentTemplate } from '@/components/story-content/template';
import { StoryPicturesTemplate } from '@/components/story-pictures/template';
import { HomesSectionTemplate } from '@/components/homes-section/template';
import { GallerySectionTemplate } from '@/components/gallery-section/template';
import FooterTemplate from '@/components/footer/template';
import { galleryImages } from '@/constants/gallery-images';
import { homeItems } from '@/constants/home-items';
import { SidebarTemplate } from '@/components/sidebar/template';
import HeaderTemplate from '@/components/header/template';
import AgentsTemplate from '@/components/agents/template';

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.sidebar}>
          <SidebarTemplate />
        </div>
        <div className={styles.header}>
          <HeaderTemplate />
        </div>
        <div className={styles.agents}>
          <AgentsTemplate />
        </div>
        <section className={styles.features}>
          <FeaturesSectionTemplate />
        </section>
        <div className={styles['story-pictures']}>
          <StoryPicturesTemplate />
        </div>
        <div className={styles['story-content']}>
          <StoryContentTemplate />
        </div>
        <section className={styles.homes}>
          <HomesSectionTemplate homes={homeItems} />
        </section>
        <div className={styles.gallery}>
          <GallerySectionTemplate images={galleryImages} />
        </div>
      </main>
      <footer className={styles.footer}>
        <FooterTemplate />
      </footer>
    </>
  );
}
