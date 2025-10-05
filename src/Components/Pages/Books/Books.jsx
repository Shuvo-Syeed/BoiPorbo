import React, { useEffect,lazy,Suspense } from 'react';
import { useState } from 'react';


const Book = lazy(() => import('../Book/Book'));
const Books = () => {
  
  const [allBooks, setAllBooks] =useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
            .then(res => res.json())
            .then(data => {
           console.log(data)
           setAllBooks(data)
        })
    },[])
  return (
    <div>
      <h1 className='text-3xl text-center p-6 '>Books</h1>
       <Suspense fallback={<span>loading......</span>}>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center'>
      {
        allBooks.map(singleBook=><Book
        key={singleBook.bookId}
        singleBook={singleBook}
        ></Book>)
      }
     </div>
       </Suspense>
    </div>
  );
};

export default Books;