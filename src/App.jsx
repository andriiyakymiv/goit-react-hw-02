// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import './App.css';
import Feedback from './components/feedback/Feedback';
import Options from "./components/options/Options";
import Notification from './components/notification/Notification';
import Description from "./components/description/Description";

function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : initialState;
  });

  const updateFeedback = (feedbackType) => {
    setNotes({ ...notes, [feedbackType]: notes[feedbackType] + 1 });
  };

  const totalPoints = Object.values(notes).reduce((acc, item) => acc + item, 0);

  const positive = Math.round((notes.good / totalPoints) * 100);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const resetNotes = () => {
    setNotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <div>
        <Description
          title="Sip Happens Café"
          text="Please leave your feedback about our service by selecting one of the options below."
        />
        <Options
          totalFeedback={totalPoints}
          updateFeedback={updateFeedback}
          resetNotes={resetNotes}
        />
        {totalPoints === 0 ? (<Notification />) : (<Feedback {...notes} totalPoints={totalPoints} positive={positive} />)}
      </div>
    </>
  );
};

export default App;