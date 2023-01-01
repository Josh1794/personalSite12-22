import styles from '../../styles/Home.module.scss';

export default function ResumeBox() {
  return (
    <div className='bg-neutral-300 dark:bg-neutral-800 w-full flex-col flex justify-center items-center h-11/12 w-11/12 rounded-lg p-4 self-center'>
      <h1 className='text-2xl text-black dark:text-white flex flex-row items-center self-center'>
        My Resume
      </h1>
      <iframe
        src='https://lavender-ardis-15.tiiny.site'
        style={{ height: '80vh', width: '80vw', marginBottom: 20 }}
      />
    </div>
  );
}
