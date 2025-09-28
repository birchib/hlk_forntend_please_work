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
//   const items = {
//     HR: [
//       "Absence",
//       "Management Hearings",
//       "Occupational Health",
//       "Special Leave",
//       "AWOL",
//       "Appeal Process",
//       "Flexible Working",
//       "Investigation",
//   ],
//   IT: [
//       "Onelogin",
//       "Multi-factor authentication",
//       "Sound issues on calls",
//       "Laptop is not working",
//       "Equipment delivery tracking",
//       "Sharepoint",
//       "Suspicious Email",
//       "Raising a ticket",
//   ],
//   Payroll: [
//       "HMRC",
//       "Payroll cut off dates",
//       "Incorrect Pay",
//       "Payslip",
//       "Pay rise",
//       "Advance",
//       "Wagestream",
//       "Contact details for payroll",
//       "Overtime",
//   ],
//   Quality: [
//       "Evaluation",
//       "System Issues",
//       "Profile",
//       "Password",
//       "Contact Us",
//       "Reporting",
//   ],

//   Recruitment: [
//       "Refer a Friend",
//       "Social Media",
//       "Current Vacancies",
//       "Internal Application Process",
//       "Pre booked Annual leave",
//       "HGS Connect",
//       "Hourly Rate",
//       "Differing contract types",
//       "DBS check timeframe",
//       "background check",
//   ],
//   WFM: [
//       "Password Reset",
//       "Medical Leave",
//       "Annual Leave",
//       "Incorrect pay",
//       "Update IEX",
//       "Send Exceptions",
//       "Deduction Process",
//   ],
// };

const [question, setQuestion] = useState(""); // State for the QuestionTextBox
const [submittedQuestion, setSubmittedQuestion] = useState(""); // Track the submitted question
// const [answer, setAnswer] = useState<string | JSX.Element[] | null>(null); // State for the QuestionAnswerBox
const [answer, setAnswer] = useState<JSX.Element[]>([]);
// Fetch books only when the question is submitted
const books = useFetchBooks(submittedQuestion);

// Update question state when an item is selected
// const handleSelectedItem = (item: string) => {
//   setQuestion(item); // Update the question state
// };

// Handle submission logic
const handleSubmit = () => {
  console.log("Submit clicked", question);
  setSubmittedQuestion(question); // Set the question for submission
};

// const listboxhandleSubmit = () => {
//   console.log("Submit clicked with question:", question);
//   setSubmittedQuestion(question); // Set the submitted question which will trigger the API call
// };

// Whenever the submitted question changes, fetch books and update the answer
useEffect(() => {
  if (submittedQuestion && books) {
    if (books.length > 0) {
      const newAnswer = books.map((book, index) => (
        <div key={book.articale_used || index}>
          <h3>{submittedQuestion}</h3>
          <h5>{book.full_answer}</h5>
          <p>Artical Used: {book.articale_used}</p>
          <p>Confidence Level: {book.confidence_level}</p>
        </div>
      ));

      setAnswer(prev => [...(prev || []), ...newAnswer]);
    } 
  }
}, [submittedQuestion, books]);


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

    {/* Left side - List box */}
    {/* <div className="list-container">
      <ListSupportGroup
        items={items}
        heading="Support Area"
        onSelectItem={(item) => {
          handleSelectedItem(item);  // Update the question state with the selected item
          listboxhandleSubmit();      // Trigger submit with the selected item
          // listboxhandleSubmit();
          // Optionally you could call handleSubmit here if you want
          // to trigger the submit when an item is selected
          // handleSubmit();
        }}
      />
    </div> */}

    {/* Centered content */}
    <div className="content-container">

      <div className="ans-box">
        <QuestionAnswerBox content={answer} /> {/* Pass the answer state as a prop */}
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

    {/* Right side - Logo */}
    {/* <div className="hub_logo-container">
      <HubertImageComponent />
    </div> */}
  </div>
);
};

export default App;

