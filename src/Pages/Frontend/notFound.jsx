import React from 'react'
import not from "../../Assets/Images/not.png"

export default function notFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className='text-center' >
            404. Page not Found
          </h1>
          <img src={not} alt="404 Not Found" />






        </div>
      </div>
    </div>
  )
}
