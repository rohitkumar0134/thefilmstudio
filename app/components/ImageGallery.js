import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const notSelectedCss =
    'text-gray-200 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800';
  const selectedCss =
    'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800';

  const categories = ['ALL', 'Shoes', 'Bags', 'Electronics', 'Gaming'];

  return (
    <div className=''>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === selectedCat ? selectedCss : notSelectedCss}
            onClick={() => setSelectedCat(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
          <div key={index}>
            <img
              className="h-[10em] object-cover object-center w-full rounded-lg"
              src={`https://images.unsplash.com/photo-1611523794717-4d1f87dabf3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNpbmVtYXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`}
              alt=""
            />
            
          </div>
          
        ))}
                  <div >
            <img
              className="h-auto max-w-full rounded-lg"
              src={`https://images.unsplash.com/photo-1583009813445-4c08d1731cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNpbmVtYXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`}
              alt=""
            />
            
          </div>
      </div>
    </div>
  );
};

export default ImageGallery;
