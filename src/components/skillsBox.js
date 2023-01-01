import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import javascriptLogo from '../images/javascript.png';
import typescriptLogo from '../images/typescript-logo.png';
import htmlLogo from '../images/HTML5.png';
import cssLogo from '../images/CSS3.png';
import sassLogo from '../images/sass-logo.png';
import reactLogo from '../images/react.png';
import nextLogo from '../images/next.png';
import reduxLogo from '../images/redux-logo.png';
import nodeLogo from '../images/nodejs_logo.png';
import postgresLogo from '../images/postgres.png';

export default function SkillsBox() {
  return (
    <div className='flex flex-col w-11/12 bg-neutral-300 dark:bg-neutral-800 rounded-md p-4 m-4'>
      <h1
        aria-label='about me title'
        className='text-2xl text-black dark:text-white flex flex-row items-center self-center'
      >
        Skills
      </h1>
      <div>
        <div className={styles.skillContent}>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image
                src={javascriptLogo}
                alt='Javascript logo'
                width={50}
                height={50}
              />
              <span className={styles.tooltiptext}>Javascript</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image
                src={typescriptLogo}
                alt='Typescript logo'
                width={50}
                height={50}
              />
              <span className={styles.tooltiptext}>Typescript</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={htmlLogo} alt='HTML logo' width={50} height={50} />
              <span className={styles.tooltiptext}>HTML</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={cssLogo} alt='CSS logo' width={40} height={50} />
              <span className={styles.tooltiptext}>CSS</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={sassLogo} alt='SASS logo' width={50} height={50} />
              <span className={styles.tooltiptext}>SASS/SCSS</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={reactLogo} alt='React logo' width={80} height={60} />
              <span className={styles.tooltiptext}>React & React Native</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={nextLogo} alt='Next.JS logo' width={70} height={60} />
              <span className={styles.tooltiptext}>Next.js</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={reduxLogo} alt='Redux logo' width={55} height={50} />
              <span className={styles.tooltiptext}>Redux</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image src={nodeLogo} alt='Node logo' width={50} height={50} />
              <span className={styles.tooltiptext}>NodeJS</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <Image
                src={postgresLogo}
                alt='Postgres logo'
                width={50}
                height={50}
              />
              <span className={styles.tooltiptext}>PostgreSQL</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <i className='fab fa-github' style={{ fontSize: '60px' }}></i>
              <span className={styles.tooltiptext}>Github</span>
            </div>
          </div>
          <div
            className={styles.skills}
            data-sal='fade'
            id={styles.splashAnimation}
          >
            <div className={styles.tooltip}>
              <i className='fab fa-git-alt' style={{ fontSize: '60px' }}></i>
              <span className={styles.tooltiptext}>Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
