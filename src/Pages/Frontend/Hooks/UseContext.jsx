import React, { useContext,useState } from 'react'
import { CountContext } from '../../../Context/CountContext'

export default function UseContext() {

 const {add,minus,setAdd,setMinus,multplication} = useContext(CountContext)

  return (


    <div className="container py-5">
      <div className="row">
        <div className="col text-center ">
          <h1 className='text-center' >Use Context</h1>

          <div>{add}</div>
          <button className='btn btn-success' onClick={() => { setAdd(add + 1) }} >Addition</button> <br />

          <div>{minus}</div>
          <button className='btn btn-danger' onClick={() => { setMinus(minus - 1) }} >Danger</button><br /><br />

          <div className="text-center">Addition after Multiplication</div>
          <div>  {multplication} </div> <br /> <br />
          <div className="btn btn-info"  onClick={()=>{setAdd(0) || setMinus(100) }} >Reset</div>

        </div>
      </div>
    </div>


  )
}
