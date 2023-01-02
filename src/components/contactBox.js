import styles from '../../styles/Home.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ContactBox() {
  const [submitterName, setSubmitterName] = useState('');
  const router = useRouter();
  return (
    <div className='flex flex-col sm:w-11/12 lg:w-8/12 bg-neutral-300 dark:bg-neutral-800 rounded-md p-4 m-4 items-center'>
      <h1
        aria-label='about me title'
        className='text-2xl text-black dark:text-white flex flex-row items-center'
      >
        Contact Me
      </h1>
      <form
        className={styles.contactForm}
        name='contact-form'
        method='POST'
        action='/api/form'
      >
        <label className='dark:text-white text-black' htmlFor='name'>
          Name:
        </label>
        <input id='name' name='name' required type='text' />
        <label className='dark:text-white text-black' htmlFor='email'>
          E-mail:
        </label>
        <input id='email' type='email' name='email' required />
        <label className='dark:text-white text-black' htmlFor='message'>
          Message:
        </label>
        <textarea id='message' name='message' required></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
