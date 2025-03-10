import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <div className='container bg-gray-300 w-1/3 mx-auto rounded my-1 shadow py-2'>
        <h2>Hey</h2>
        <p className='my-2'>Walid Ezzat</p>
        <Button>Click Me</Button>
    </div>
  )
}

export default Card