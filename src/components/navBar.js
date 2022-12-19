import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <h2>Joshua Grossman</h2>
      <Link href={'/resume'}>My Resume</Link>
    </nav>
  );
}
