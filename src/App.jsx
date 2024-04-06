import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

const baseState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : baseState;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedbackState) => ({
      ...prevFeedbackState,
      [feedbackType]: prevFeedbackState[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const notBadFeedback = feedback.good + feedback.neutral;

  const resetFeedback = () => {
    setFeedback(baseState);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          notBadFeedback={notBadFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;