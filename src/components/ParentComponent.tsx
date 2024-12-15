// import { useState } from "react";
// import ListSupportGroup from "./ListSuportFunctions";
// import QuestionTextBox from "./QuestionBox";

// const ParentComponent = () => {
//   const [question, setQuestion] = useState(""); // Shared state for the question box

//   const handleSelectItem = (item: string) => {
//     setQuestion(item); // Update the question box content when an item is clicked
//   };

//   const handleEnter = () => {
//     console.log("Entered question:", question); // Log or handle the question text when Enter is pressed
//   };

//   return (
//     <div>
//       <ListSupportGroup
//         items={{
//           HR: [
//             "Absence",
//             "Management Hearings",
//             "Occupational Health",
//             "Special Leave",
//             "AWOL",
//             "Appeals Process",
//             "Flexible Working",
//             "Investigation",
//           ],
//           IT: [
//             "Onelogin",
//             "Multi-factor authentication",
//             "Sound issues on calls",
//             "Laptop is not working",
//             "Equipment delivery tracking",
//             "Sharepoint",
//             "Suspicious Email",
//             "Raising a ticket",
//           ],
//           Payroll: [
//             "HMRC",
//             "Payroll cut off dates",
//             "Incorrect Pay",
//             "Payslip",
//             "Pay rise",
//             "Advance",
//             "Wagestream",
//             "Contact details for payroll",
//             "Overtime",
//           ],
//           Quality: [
//             "Evaluation",
//             "System Issues",
//             "Profile",
//             "Password",
//             "Contact Us",
//             "Reporting",
//           ],
//           Recruitment: [
//             "Refer a Friend",
//             "Social Media",
//             "Current Vacancies",
//             "Internal Application Process",
//             "Pre booked Annual leave",
//             "HGS Connect",
//             "Hourly Rate",
//             "Differing contract types",
//             "DBS check timeframe",
//             "background check",
//           ],
//           WFM: [
//             "Password Reset",
//             "Medical Leave",
//             "Annual Leave",
//             "Incorrect pay",
//             "Update IEX",
//             "Send Exceptions",
//             "Deduction Process",
//           ],
//         }}
//         heading="Select a Topic"
//         onSelectItem={handleSelectItem} // Pass the handler to ListSupportGroup
//       />
//       <div className="content-container">
//         <div className="que-box">
//           <QuestionTextBox
//             value={question} // Pass the current value
//             onValueChange={setQuestion} // Update state on typing
//             onEnter={handleEnter} // Handle Enter key
//             />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParentComponent;