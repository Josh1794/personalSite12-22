import Head from 'next/head';
import Image from 'next/image';
import AboutBox from '../src/components/aboutBox';
import HeaderBox from '../src/components/headerBox';
import NavBar from '../src/components/navBar';
import SkillsBox from '../src/components/skillsBox';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Grossman</title>
        <meta name='description' content="Joshua Grossman's Personal Website" />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/569d14e1d2.js'
          crossOrigin='anonymous'
        />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <HeaderBox />
        <AboutBox />
        <SkillsBox />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
