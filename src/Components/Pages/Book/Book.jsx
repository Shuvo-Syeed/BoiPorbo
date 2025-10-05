import React from 'react';
import { Link } from 'react-router';
import { IoIosStarHalf } from "react-icons/io";


const Book = ({singleBook}) => {
  const {bookId,bookName,author,rating,category,review,yearOfPublishing
,image}=singleBook
  return (
  <Link to={`/bookDetails/${bookId}`}>
   <div className="card w-96 glass shadow-lg border border-gray-200 my-4 p-6">
      <figure >
        <img style={{height:"166px"}  }
          src={image} 
          alt={bookName} 
          className="rounded-t-lg" 
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <span className="text-red-500">{author}</span>
       
        {/* Scrollable Review */}
        <div className="max-h-20 overflow-y-auto  p-2">
          <p>{review}</p>
        </div>

        <p>{yearOfPublishing}</p>
        <div className='border-t-2 border-dashed'></div>
        
     

        <div className="card-actions justify-end">
          
         <h4 className="badge badge-outline">{rating} <IoIosStarHalf /></h4>
        <p className="">{category}</p>
          
        </div>
      </div>
    </div>
  </Link>
  );
};

export default Book;