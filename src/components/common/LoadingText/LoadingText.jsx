import styles from "./LoadingText.module.css";

const LoadingText = () => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <div className={styles.text}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  </div>
);

export default LoadingText;
