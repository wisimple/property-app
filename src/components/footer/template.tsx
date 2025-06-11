import styles from './styles.module.scss';

const navigationItems = [
  {
    label: 'Find your dream home',
    href: '#',
  },
  {
    label: 'Request proposal',
    href: '#',
  },
  {
    label: 'Download home planner',
    href: '#',
  },
  {
    label: 'Contact us',
    href: '#',
  },
  {
    label: 'Submit your property',
    href: '#',
  },
  {
    label: 'Work with us',
    href: '#',
  },
];
export default function FooterTemplate() {
  return (
    <nav className={styles.container}>
      <ul className={styles['item-container']}>
        {navigationItems.map((item) => (
          <li className={styles.item}>
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>&copy; Copyright 2025 by Arif</p>
    </nav>
  );
}
