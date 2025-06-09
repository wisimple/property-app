import styles from './styles.module.scss';

export const StoryContentTemplate = () => {
  return (
    <div className={styles.container}>
      <h3 className='heading-3 mb-sm'>Happy Customers</h3>
      <h2 className='heading-2 color-dark mb-md'>
        &ldquo;The best decision of our lives&rdquo;
      </h2>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </p>
      <button className='button'>Find your home</button>
    </div>
  );
};
