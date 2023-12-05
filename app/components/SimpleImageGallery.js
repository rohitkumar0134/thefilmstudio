import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleImageGallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const { data } = await axios.get("/api/gallery");
      setGalleryData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    // Load GLightbox only on the client side
    if (typeof window !== 'undefined') {
      import('glightbox').then((GLightbox) => {
        const lightboxInstance = GLightbox.default({
          selector: '.glightbox',
        });
      });
    }
  }, [galleryData]);

  return (
    <section id="examples" className="section mt-4">
     
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData?.map((data) => (
          <a key={data.id} href={data.image ? data.image : data.video} 
          className="glightbox"
         
          >
            <img
              src={data.thumbnailimg}
              alt={data.thumbnailimg}
              className="h-auto max-w-full rounded-lg"
            />
          </a>
        ))}

      </div>
    </section>
  );
};

export default SimpleImageGallery;
