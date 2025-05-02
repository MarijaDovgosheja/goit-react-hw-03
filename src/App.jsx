import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import description from "./description.json";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Description title={description.title} text={description.text} />
      <Options onFeedback={handleFeedback} total={total} />;
      {total > 0 && (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={Math.round((feedback.good / total) * 100)}
        />
      )}
      {total === 0 && <Notification message="No feedback yet" />}
    </div>
  );
};

export default App;
