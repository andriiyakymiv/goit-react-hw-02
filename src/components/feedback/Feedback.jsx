import clsx from "clsx";
import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalPoints, positive }) => {
  return (
    <div className={styles.feedback__list}>
      <div className={styles.feedback__vote}>
        <p className={clsx(styles.feedbackItem, good > 0 && styles.change)}>
          Good - <span>{good}</span>
        </p>
          
        <p className={clsx(styles.feedbackItem, neutral > 0 && styles.change)}>
          Neutral - <span>{neutral}</span>
        </p>
          
        <p className={clsx(styles.feedbackItem, bad > 0 && styles.change)}>
          Bad - <span>{bad}</span>
        </p>
      </div>
        
      <div className={styles.feedback__statistic}>
        <p className={clsx(styles.feedbackItem, totalPoints > 0 && styles.change)}>
          Total - <span>{totalPoints}</span>
        </p>
          
        <p className={clsx(styles.feedbackItem, positive > 0 && styles.change)}>
          Positive - <span>{positive}%</span>
        </p>
      </div>
    </div>
  );
};

export default Feedback;