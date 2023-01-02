import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function NavBar() {
  return (
    <nav className='z-10 w-full px-2 bg-white dark:bg-black flex flex-row items-center justify-between h-14 fixed'>
      {/* NEED TO ADD DARK/LIGHT MODE CONTROL */}
      <h2 className='text-2xl text-orange-400'>Joshua Grossman</h2>
      <Link classname='text-1xl justify-end' href={'/resume'}>
        <h3 className=' text-black dark:text-white hover:text-orange-400 transition-colors'>
          My Resume
        </h3>
      </Link>
    </nav>
  );
}
