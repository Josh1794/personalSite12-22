import styles from '../../styles/Home.module.scss';

export default function ResumeBox() {
  return (
    <div className='bg-neutral-300 dark:bg-neutral-800 flex-col flex justify-center items-center h-5/6 w-11/12 rounded-lg p-4 self-center'>
      <h1 className='text-2xl text-black dark:text-white flex flex-row items-center self-center'>
        My Resume
      </h1>

      <iframe
        src='https://drive.google.com/file/d/1iylhH1h-12YXC--5honTOU6t0bm0uxKV/preview?usp=embed_googleplus'
        style={{
          width: '80vw',
          height: '80vh',
        }}
        allowFullScreen
      />
    </div>
  );
}
