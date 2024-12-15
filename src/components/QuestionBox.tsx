// import React, { useState } from "react";

// interface QuestionProps {
//   value: string; // Current value of the text box
//   onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Function to update the value
//   onEnter: (value: string) => void; // Callback triggered when Enter is pressed
// }

// const QuestionTextBox: React.FC<QuestionProps> = ({ value, onChange, onEnter }) => {
//   const [localValue, setLocalValue] = useState(value); // Local state for text box

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent newline on Enter
//       onEnter(localValue); // Trigger callback with the current value
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setLocalValue(event.target.value); // Update local state
//     onChange(event); // Also call the onChange prop to sync with parent
//   };

//   return (
//     <textarea
//       className="que-text-box"
//       placeholder="Write your question here"
//       value={localValue} // Controlled input
//       onChange={handleChange} // Updates local state and syncs with parent
//       onKeyDown={handleKeyDown} // Calls onEnter when Enter is pressed
//       spellCheck={true}
//     />
//   );
// };

// export default QuestionTextBox;

import React from "react";

interface QuestionProps {
  value: string; // Current value of the text box
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Function to update the value
  onEnter: () => void; // Callback triggered when Enter is pressed
}

const QuestionTextBox: React.FC<QuestionProps> = ({ value, onChange, onEnter }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent newline on Enter
      onEnter(); // Trigger the onEnter callback
    }
  };

  return (
    <textarea
      className="que-text-box"
      placeholder="Write your question here"
      value={value} // Controlled input
      onChange={onChange} // Updates parent state on typing
      onKeyDown={handleKeyDown} // Calls onEnter when Enter is pressed
      spellCheck={true}
    />
  );
};

export default QuestionTextBox;