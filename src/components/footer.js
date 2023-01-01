import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import profilePic from '../images/profilepic.jpg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a target='_blank' rel='noopener noreferrer'>
        Created by{' '}
        <span className={styles.logo}>
          <Image
            src={profilePic}
            height={25}
            width={25}
            style={{ borderRadius: 25, marginLeft: 10 }}
          />{' '}
        </span>
      </a>
    </footer>
  );
}
