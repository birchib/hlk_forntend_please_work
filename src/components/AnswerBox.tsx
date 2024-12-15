interface QuestionAnswerBoxProps {
  content: string | JSX.Element[] | null; // This can be a string, an array of JSX elements, or null
}

const QuestionAnswerBox: React.FC<QuestionAnswerBoxProps> = ({ content }) => {
  return (
    <div className="AnswerBox">
      {content}
    </div>
  );
};

export default QuestionAnswerBox;