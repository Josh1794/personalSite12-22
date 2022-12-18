import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import profilePic from '../assets/images/profilepic.jpg';

export default function AboutBox() {
  return (
    <div className={styles.aboutBox}>
      <h1 aria-label='about me title' className={styles.titleText}>
        About Me
        <Image
          src={profilePic}
          height={40}
          width={40}
          style={{ borderRadius: 25, marginLeft: 10 }}
          loading={'lazy'}
        />
      </h1>
      <p aria-label='about me text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
