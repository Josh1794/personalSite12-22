import Image from 'next/image';
import profilePic from '../images/profilepic.jpg';

export default function AboutBox() {
  return (
    <div className='flex flex-col sm:w-11/12 lg:w-8/12 bg-neutral-300 dark:bg-neutral-800 rounded-md p-4 m-4'>
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
      <p
        className='text-black dark:text-white text-base p-2'
        aria-label='about me text'
      >
        I am a software developer with multiple years of exerience working as
        both a frontend and fullstack developer. I love working with React and
        React Native, and am always looking to learn and try new things. I am
        comfortable writing code in Javascipt and Typescript and have experience
        working with PHP backends as well. Feel free to reach out to me via
        email or connect on LinkedIn.
      </p>
    </div>
  );
}
