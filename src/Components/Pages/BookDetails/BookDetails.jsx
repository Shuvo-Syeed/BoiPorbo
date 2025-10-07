import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../Utility/AddToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const BookDetails = () => {
  const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
     const singleBook = Array.isArray(data)
    ? data.find(book => book.bookId === bookId)
    : null;
   const { bookName, image,review } = singleBook;
   const handleMarkAsRead=(id)=>{
    addToStoredDB(id);
    Swal.fire({
  title: " Yoo Good job!",
  text: "Added!",
  icon: "success"
});
   }
   const handleWishlist=(image)=>{
    addToStoredDB(image);
   }


 
  return (
 
  <div className="max-w-3xl mx-auto my-8 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
 
  <div className="md:w-1/3 flex items-center justify-center bg-gray-50 p-6">
    <img
      className="w-40 h-56 object-cover rounded-lg border shadow-sm"
      src={image}
      alt={bookName}
    />
  </div>

 
  <div className="md:w-2/3 p-6 flex flex-col justify-between border-7">
    <h5 className="text-2xl font-bold text-gray-800 mb-4">{bookName}</h5>
   

    <div className="text-gray-600 leading-relaxed max-h-40 overflow-y-auto pr-2">
      <p>{review}</p>
    </div>
<div className='flex gap-2'>
  
   <button className="btn btn-info" onClick={()=>handleMarkAsRead(id)}>Mark As Read</button>
<button className="btn btn-success"onClick={()=>handleWishlist(image)}>Add To Wishlist</button>
</div>
  </div>
</div>
        
    
  );
};

export default BookDetails;