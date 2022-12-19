import Head from 'next/head';
import AboutBox from '../src/components/aboutBox';
import ContactBox from '../src/components/contactBox';
import Footer from '../src/components/footer';
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
        <ContactBox />
      </main>
      <Footer />
    </div>
  );
}
