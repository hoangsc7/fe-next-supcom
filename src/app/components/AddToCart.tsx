'use client'

import React from 'react'

const AddToCart = () => {
  return (
    <div className=''>
      <button
        onClick={() => {
          console.log('Add to Cart clicked')
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCart
