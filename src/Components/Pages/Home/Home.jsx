import React from 'react';
import Banner from '../../Banner/Banner';
import Books from '../Books/Books';


// Home component that renders the Banner and Books components

const Home = () => {
  return (
    <div className="
               bg-gradient-to-r from-gray-100 via-gray-500 via-gray-300 to-white animate-gradient-bg">
      <Banner />
      <Books  />
 
  
    </div>
  );
};

export default Home;