
import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function BeforeAfter({before,after}) {
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
      <div className='mx-2 rounded'>
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: before
          }}
          secondImage={{
            imageUrl: after
          }}
          delimiterIconStyles={delimiterIconStyles}
        />

      </div>



    </>
  )
}

export default BeforeAfter