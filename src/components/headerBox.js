import styles from '../../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export default function HeaderBox() {
  return (
    <div className='bg-cover bg-headerBackground bg-neutral-800 shadow-md w-full flex-col flex justify-center items-center h-96'>
      <h1 className='text-6xl font-bold text-white text-center'>
        Joshua Grossman
      </h1>
      <div className={styles.social}>
        <a
          aria-label='Linkedin Profile'
          href='https://www.linkedin.com/in/joshua-grossman17/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            className={styles.socialIcon}
            icon={faLinkedin}
            size='md'
          />
        </a>
        <a
          aria-label='Github Profile'
          href='https://github.com/Josh1794'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            className={styles.socialIcon}
            icon={faGithub}
            size='md'
          />
        </a>

        <a
          aria-label='Stack Overflow Profile'
          href='https://stackoverflow.com/users/12751027/josh'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            className={styles.socialIcon}
            icon={faStackOverflow}
            size='md'
          />
        </a>
      </div>
    </div>
  );
}
