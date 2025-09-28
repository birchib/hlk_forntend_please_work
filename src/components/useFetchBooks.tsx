import { useEffect, useState } from 'react';
import { Book } from './booktype';

// export const useFetchBooks = (question: string): Book[] => {  // Explicitly typing the return value as Book[]
//   const [books, setBooks] = useState<Book[]>([]);  // Typing books as an array of Book objects

//   useEffect(() => {
//     if (question.trim() === "") return; // Avoid fetching when question is empty

//     const fetchBooks = async () => {
//       try {
//         // Dynamically build the URL with the question parameter
        
// //        const response = await fetch(`https://hlk-djangobackend.azurewebsites.net/api/persons/?search=${encodeURIComponent(question)}`);
//         // const url = `http://127.0.0.1:8000/api/persons/?search=${encodeURIComponent(question)}`;
//         // console.log("Fetching URL:", url); // Log the constructed URL
//         // const response = await fetch(url);
//         const response = await fetch(`https://hlk-djangobackend.azurewebsites.net/api/area_of_law/?question=${encodeURIComponent(question)}`);
//         const data = await response.json();
//         console.log("Fetched books:", data);
//         setBooks(data);  // Assuming the API returns an array of Book objects
//       } catch (err) {
//         console.error("Error fetching books:", err);
//       }
//     };

//     fetchBooks(); // Trigger fetch when question changes
//   }, [question]);  // Add `question` as a dependency to trigger the effect when it changes

//   return books;  // Return the list of books
// };


export const useFetchBooks = (question: string): Book[] => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!question.trim()) return;

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://hlk-djangobackend.azurewebsites.net/api/area_of_law/?question=${encodeURIComponent(question)}`
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data.Response) {
          const responseData = data.Response;
          const bookArray: Book[] = [{
            articale_used: responseData["Artical Used"] || "",
            full_answer: responseData.Answer || "",
            confidence_level: String(responseData.Confidence_level || 0)
          }];
          setBooks(bookArray);
        } else {
          setBooks([]);
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setBooks([]);
      }
    };

    fetchBooks();
  }, [question]);

  return books;
};


// import { useEffect, useState } from 'react'

// export const useFetchBooks = () => {
// // State variables to manage the application state
//     const [books, setBooks] = useState([]); // Holds the list of books fetched from the backend
  
//     useEffect(() => {
//         //Function to fetch the list of books from API
//         const fetchBooks = async () => {
//         try {
//           const response = await fetch("http://127.0.0.1:8000/api/books/");
//           const data = await response.json();
//         // Update the state with the fetched books
//           console.log("Fetched books:", data);
//           setBooks(data);
//         } catch (err) {
//           console.error("Error fetching books:", err);
//         }
//       };
//       fetchBooks();
//     }, []);
  
//     return books;
//   };