import styles from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const handleFeedbackClick = feedbackType => {
    updateFeedback(feedbackType);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttons} onClick={() => handleFeedbackClick("good")}>
        Good
      </button>
      <button className={styles.buttons} onClick={() => handleFeedbackClick("neutral")}>
        Neutral
      </button>
      <button className={styles.buttons} onClick={() => handleFeedbackClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.buttons} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;




