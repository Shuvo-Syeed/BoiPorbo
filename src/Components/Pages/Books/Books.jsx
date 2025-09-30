import React, { useEffect } from 'react';
import { useState } from 'react';
import bookData from '../../../public/books.json'; // Assuming the JSON file is in the public folder

const Books = () => {
  const [allBooks, setAllBooks] =useState([]);
    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => {
           console.log(data)
        })
    },[])
  return (
    <div>
      <h1>dsds</h1>
    </div>
  );
};

export default Books;