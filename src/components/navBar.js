import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* NEED TO ADD DARK/LIGHT MODE CONTROL */}
      <h2>Joshua Grossman</h2>
      <Link href={'/resume'}>My Resume</Link>
    </nav>
  );
}
