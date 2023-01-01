import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import profilePic from '../images/profilepic.jpg';

export default function AboutBox() {
  return (
    <div className='flex flex-col w-11/12 bg-neutral-300 dark:bg-neutral-800 rounded-md p-4 m-4'>
      <h1
        aria-label='about me title'
        className='text-2xl text-black dark:text-white flex flex-row items-center self-center'
      >
        About Me
        <Image
          className='rounded-full h-11 w-11'
          src={profilePic}
          loading={'lazy'}
        />
      </h1>
      <p className='text-black dark:text-white' aria-label='about me text'>
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
