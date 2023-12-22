
import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';


function BeforeAftermap({before,after}) {
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
      <div 
      
      className='mx-2'>
        <ReactBeforeSliderComponent
        className='w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer'
        style={{
            height: '40vw',
            maxHeight: '20em',
            maxWidth: '30em',
            objectFit: 'cover',
            cursor: 'pointer',
        }}
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

export default BeforeAftermap