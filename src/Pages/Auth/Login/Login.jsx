import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'



// Blank User
const initialState = {
  firstName: "",
  lastName: "",
  Email: "",
  Password: "",

}







export default function Login() {
  const {setmyName} = useContext(AuthContext)

 



  return (
    <div className="container text-center ">
      <div className="row">
        <div className="col">

          <div className="container py-5">
            <h2 className='text-center fw-bold mb-3' style={{ fontFamily: "Poppins", }} >LOGIN</h2>
            <div className="card  text-center p-4">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">  <input type="text" placeholder='Enter Your Name' name='firstName'    onChange={(e)=>{setmyName(e.target.value)}} className="form-control" ></input> </div>
                
              </div>
              <div className="row">
                <div className="col-12 mb-3 "><input type="text" placeholder='Email' name='Email' class="form-control" ></input></div>
              </div>
              <div className="row">
                <div className="col-12 mb-3 "><input type="text" name='Password' placeholder='Password' class="form-control" ></input></div>
              </div>
              <div className="row">
                <button className='btn btn-primary m-auto w-50' >Submit</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
