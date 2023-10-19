import React from 'react'




export default function Footer() {


const year = new Date().getFullYear();

  return (
    <div className="col text-center">
        <div className="p mb-0 bg-primary text-white p-2"> {year} &copy; .All Rights Reserved </div>
    </div>
  )
}
