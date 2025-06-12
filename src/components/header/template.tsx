import Image from 'next/image';
import styles from './styles.module.scss';

const logos = [
  { src: '/img/logo-bbc.png', alt: 'Logo 1' },
  { src: '/img/logo-bi.png', alt: 'Logo 2' },
  { src: '/img/logo-forbes.png', alt: 'Logo 3' },
  { src: '/img/logo-techcrunch.png', alt: 'Logo 3' },
];

export default function HeaderTemplate() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src='/img/logo.png'
        alt='Logo'
        width={150}
        height={60}
      />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className={`button ${styles['button-cta']}`}>
        View our properties
      </button>
      <div className={styles['seen-on-text']}>Seen on</div>
      <div className={styles['seen-on-logos']}>
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={25}
          />
        ))}
      </div>
    </header>
  );
}
