
import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function BeforeAfter() {
  // Pass this as a delimiterIconStyles property
  const delimiterIconStyles = {
    width: '1.7rem',
    height: '1.7rem',
    backgroundSize: 'cover',
    borderRadius: 'none',
    backgroundImage: 'url(https://i.imgur.com/nxU8zXR.png)'
  }

  return (
    <>
      <div className='m-2 mx-4'>
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: "https://smeleshkin.github.io/react-before-after-slider-component//assets/image2.jpg"
          }}
          secondImage={{
            imageUrl: "https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg"
          }}
          delimiterIconStyles={delimiterIconStyles}
        />

      </div>



    </>
  )
}

export default BeforeAfter