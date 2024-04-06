import styles from "./Feedback.module.css";

function Feedback({feedback, totalFeedback, notBadFeedback}) {
    const positive = Math.round((notBadFeedback / totalFeedback) * 100)
  return (
    <div className={styles.wrapper}>
      <ul className={styles.feedbackList}>
        <li><p className={styles.text}>Good: {feedback.good}</p></li>
        <li><p className={styles.text}>Neutral: {feedback.neutral}</p></li>
        <li><p className={styles.text}>Bad: {feedback.bad}</p></li>
        <li><p className={styles.text}>Total: {totalFeedback}</p></li>
        <li><p className={styles.text}>Positive: {positive}%</p></li>
      </ul>
    </div>
  );
}
export default Feedback;