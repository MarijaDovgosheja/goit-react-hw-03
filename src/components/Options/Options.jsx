import css from "./Options.module.css";

export default function Options({ total, onFeedback }) {
  return (
    <div className={css.containerBtn}>
      <button className={css.button} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={() => onFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
