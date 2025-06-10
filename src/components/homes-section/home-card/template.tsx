import Image from 'next/image';
import styles from './styles.module.scss';
import { IconHeart } from '@/icons/Heart';
import { IconMapPin } from '@/icons/map-pin';
import { IconExpand } from '@/icons/expand';
import { IconKey } from '@/icons/key';
import { IconUser } from '@/icons/user';

interface HomeCardTemplateProps {
  imgUrl: string;
  title: string;
  location: string;
  roomCount: number;
  area: number;
  price: number;
}

export const HomeCardTemplate = (props: HomeCardTemplateProps) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(props.price);

  return (
    <div className={styles.container}>
      <Image
        src={props.imgUrl}
        alt='House 1'
        className={styles.image}
        height={180}
        width={250}
      />
      <IconHeart className={styles['like-icon']} />
      <h5 className={styles.title}>{props.title}</h5>
      <div className={styles.location}>
        <IconMapPin className={styles['attribute-icon']} />
        <p>{props.location}</p>
      </div>
      <div className={styles.rooms}>
        <IconUser className={styles['attribute-icon']} />
        <p>{props.roomCount} room</p>
      </div>
      <div className={styles.area}>
        <IconExpand className={styles['attribute-icon']} />
        <p>
          {props.area} m<sup>2</sup>
        </p>
      </div>
      <div className={styles.price}>
        <IconKey className={styles['attribute-icon']} />
        <p>{formattedPrice}</p>
      </div>
      <button className={`${styles['button-cta']} button`}>
        Contact agent
      </button>
    </div>
  );
};
