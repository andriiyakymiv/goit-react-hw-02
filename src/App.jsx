// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import './App.css';
import Feedback from './components/feedback/Feedback';
import Options from "./components/options/Options";
import Header from "./components/header/Header";

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
      <Header />
      <Options
        totalFeedback={totalPoints}
        updateFeedback={updateFeedback}
        resetNotes={resetNotes}
      />
      <Feedback {...notes} totalPoints={totalPoints} positive={positive} />
    </>
  );
};

export default App;
