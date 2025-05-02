import css from "./Feedback.module.css";
export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.feedbackItem}>
      <li className={css.feedbackList}>Good: {good}</li>
      <li className={css.feedbackList}>Neutral: {neutral}</li>
      <li className={css.feedbackList}>Bad: {bad}</li>
      <li className={css.feedbackList}>Total: {total}</li>
      <li className={css.feedbackList}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}
