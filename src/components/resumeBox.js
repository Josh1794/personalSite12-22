import styles from '../../styles/Home.module.scss';

export default function ResumeBox() {
  return (
    <div className={styles.resumeBox}>
      <h1 aria-label='about me title' className={styles.titleText}>
        My Resume
      </h1>
      <iframe
        src='https://lavender-ardis-15.tiiny.site'
        style={{ height: '80vh', width: '80vw', marginBottom: 20 }}
      />
    </div>
  );
}
