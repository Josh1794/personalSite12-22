import styles from '../../styles/Home.module.scss';

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
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          aria-label='Github Profile'
          href='https://github.com/Josh1794'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fab fa-github'></i>
        </a>

        <a
          aria-label='Stack Overflow Profile'
          href='https://stackoverflow.com/users/12751027/josh'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fab fa-stack-overflow'></i>
        </a>
      </div>
    </div>
  );
}
