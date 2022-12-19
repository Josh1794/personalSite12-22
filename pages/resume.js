import ResumeBox from '../src/components/resumeBox';
import styles from '../styles/Home.module.scss';

export default function Resume() {
  return (
    <div className={styles.resumePage}>
      <a href={'/'} style={{ top: 20, left: 20, fontSize: 30 }}>
        &larr;
      </a>
      <ResumeBox />
    </div>
  );
}
