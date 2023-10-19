import React, { useEffect, useState } from 'react'

export default function UseState() {
  const [color, setColor] = useState("primary")


  useEffect(()=>{alert(`you cicked ${color}`)},[color])


  
   


  return (




    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 className='text-centers' >UseState</h1>


        </div>
        <div className="row">
          <div className="col">
            <div className=" m-1 btn btn-primary" onClick={() => setColor("primary")} >Primary</div>
            <div className=" m-1 btn btn-secondary " onClick={() => setColor("secondary")} >Secondary</div>
            <div className=" m-1 btn btn-success" onClick={() => setColor("success")} >Success</div>
            <div className=" m-1 btn btn-danger" onClick={() => setColor("danger")} >Danger</div>
            <div className=" m-1 btn btn-warning" onClick={() => setColor("warning")}>Warning</div>
            <div className=" m-1 btn btn-info" onClick={() => setColor("info")}>Info</div>
            <div className=" m-1 btn btn-dark" onClick={() => setColor("dark")}>Dark</div> <br /><br />
            <div className={`btn btn-${color}`}>Click on Button to change Color</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className='mt-5' >COLOR INPUT</h1>
            <input type="color" name='bgColor' />
            
          </div>
        </div>
      </div>
    </div>
  )
}
