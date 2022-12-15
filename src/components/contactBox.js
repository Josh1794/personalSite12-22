import styles from '../../styles/Home.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ContactBox() {
  const [submitterName, setSubmitterName] = useState('');
  const router = useRouter();
  return (
    <div className={styles.aboutBox}>
      <h1 aria-label='about me title' className={styles.titleText}>
        Contact Me
      </h1>
      <form
        className={styles.contactForm}
        name='contact-form'
        method='POST'
        action='/api/form'
      >
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' required type='text' />
        <label htmlFor='email'>E-mail:</label>
        <input id='email' type='email' name='email' required />
        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' required></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
