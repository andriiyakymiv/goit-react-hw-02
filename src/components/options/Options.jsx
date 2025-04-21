import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetNotes }) => {

  const options = ["good", "neutral", "bad"];

  return (

    <ul className={styles.options__list}> {options.map((option) => {
        return (
          <li key={option}>
            <button className={styles.option__button} onClick={() => updateFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}

      {totalFeedback !== 0 && (
        <li key="reset">
          <button className={styles.button__reset} onClick={resetNotes}>
            Reset points
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;