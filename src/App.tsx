import { useState, useEffect } from "react";
import "./App.css";
import QuestionAnswerBox from "./components/AnswerBox";
import Button from "./components/Button";
import ImageComponent from "./components/HGSLogo";
// import HubertImageComponent from "./components/Hubert";
// import ListSupportGroup from "./components/ListSuportFunctions";
import QuestionTextBox from "./components/QuestionBox";
import { useFetchBooks } from "./components/useFetchBooks";
// import { Book } from './components/booktype';

function App() {

const [question, setQuestion] = useState(""); // State for the QuestionTextBox
const [submittedQuestion, setSubmittedQuestion] = useState(""); // Track the submitted question
// const [answer, setAnswer] = useState<string | JSX.Element[] | null>(null); // State for the QuestionAnswerBox
const [answer, setAnswer] = useState<JSX.Element[]>([]);
// Fetch books only when the question is submitted
const books = useFetchBooks(submittedQuestion);
const [loading, setLoading] = useState(false);
const [historicAnswers, setHistoricAnswers] = useState<JSX.Element[]>([]);

// Handle submission logic
const handleSubmit = () => {
  if (!question.trim()) return;
  setSubmittedQuestion(question);
  setLoading(true);
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
  setHistoricAnswers(prev => {
    const updated = [...prev, ...newAnswer];
    setAnswer(updated); // update answer only once, after API returned
    return updated;
  });

  setLoading(false); // stop loading
}, [books]); // only run when books actually change
return (
  <div className="app-container">
    <div className="header-container">
      {/* Top row - HGS logo */}
      <div className="top_right_hgs_logo-container">
        <ImageComponent />
      </div>

      {/* Top row - Logo and "Hello World" */}
      <div className="logo_name-container">
        <span>Welcome to Hubert</span>
      </div>


      <div className="top_left_hgs_logo-container">
        <ImageComponent />
      </div>
    </div>

    {/* Centered content */}
    <div className="content-container">

    <div className="ans-box">
      {loading ? (
        <div className="loading">Loading answer...</div>
      ) : (
        <QuestionAnswerBox content={answer} />
      )}
    </div>



      <div className="que-box">
        <QuestionTextBox
          value={question}
          onChange={(e) => setQuestion(e.target.value)} // Update the state as user types
          onEnter={() => {
            console.log("Entered text:", question); // Log the text to the console
            handleSubmit(); // Trigger the submit action when Enter is pressed
          }}
        />
      </div>

      <div className="sub-button">
        <Button onClick={handleSubmit}>Submit</Button> {/* Call handleSubmit on click */}
      </div>

   
    </div>

  </div>
);
};

export default App;

