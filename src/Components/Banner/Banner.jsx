import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
  return (
   <div class="hero bg-base-300 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img style={{}}
      src={bookimage}
  className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Grab Your Favourite Books</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;