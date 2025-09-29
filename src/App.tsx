import { useState, useEffect } from "react";
import "./App.css";
import QuestionAnswerBox from "./components/AnswerBox";
import Button from "./components/Button";
// import ImageComponent from "./components/HGSLogo";
// import HubertImageComponent from "./components/Hubert";
// import ListSupportGroup from "./components/ListSuportFunctions";
import QuestionTextBox from "./components/QuestionBox";
import { useFetchBooks } from "./components/useFetchBooks";
// import { Book } from './components/booktype';
import BusinessExcellence from "./components/be";

function App() {

const [question, setQuestion] = useState(""); // State for the QuestionTextBox
const [submittedQuestion, setSubmittedQuestion] = useState(""); // Track the submitted question
// const [answer, setAnswer] = useState<string | JSX.Element[] | null>(null); // State for the QuestionAnswerBox
const [answer, setAnswer] = useState<JSX.Element[]>([]);
// Fetch books only when the question is submitted
const books = useFetchBooks(submittedQuestion);
const [loading, setLoading] = useState(false);
// const [historicAnswers, setHistoricAnswers] = useState<JSX.Element[]>([]);

// Handle submission logic
const handleSubmit = () => {
  if (!question.trim()) return;
  setSubmittedQuestion(question);
  setLoading(true);
};

const handlehelpfullSubmit = () => {
  if (answer.length === 0) {
    alert("No answer available yet!");
    return;
  }
  alert(`Marked as helpful for: "${submittedQuestion}"`);
};

// Whenever the submitted question changes, fetch books and update the answer

useEffect(() => {
  if (!submittedQuestion) return; // no question submitted yet
  if (books.length === 0) return; // wait for API to return

  // Map the API response into JSX
  const newAnswer = books.map((book, index) => (
    <div key={book.articale_used || index}>
      <h3>{submittedQuestion}</h3>
      <h5>{book.full_answer}</h5>
      <p>Artical Used: {book.articale_used}</p>
      <p>Confidence Level: {book.confidence_level}</p>
    </div>
  ));

  // Append to historicAnswers using functional update
  // setHistoricAnswers(prev => {
  //   const updated = [...prev, ...newAnswer];
  //   setAnswer(updated); // update answer only once, after API returned
  //   return updated;
  // });

  const updatedAnswers = [...answer, ...newAnswer];
  setAnswer(updatedAnswers); // only update answer

  setLoading(false); // stop loading
  }, [books]); // only run when books actually change

return (
  <div className="qa-container">
    {/* Business Excellence Section */}
    <div className="qa-card">
      <BusinessExcellence />
    </div>

    {/* Answer card */}
    <div className="qa-card">
      {loading ? (
        <div className="loading">Loading answer...</div>
      ) : (
        <QuestionAnswerBox content={answer} />
      )}
    </div>

    {/* Question card */}
    <div className="qa-card">
      <QuestionTextBox
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onEnter={handleSubmit}
      />
      <div style={{ marginTop: "10px", textAlign: "right" }}>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handlehelpfullSubmit}>Helpfull</Button>
      </div>
    </div>
  </div>
);
};

export default App;

