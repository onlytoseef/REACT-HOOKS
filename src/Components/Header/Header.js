import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../Pages/Auth/Login/Login'
import { AuthContext } from '../../Context/AuthContext'


export default function Header() {

const {myName} = useContext(AuthContext)

  return (

    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold" >Auth App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" >About Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link active">Contact Us</Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hooks
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/Hooks/UseState" className="dropdown-item" >UseState</Link></li>
                  
                
                  <li><Link to="/Hooks/UseRefaandUseMemo" className="dropdown-item" >UseRef</Link></li>
                  <li><Link to="/Hooks/UseContext" className="dropdown-item" >CreateContext</Link></li>
                  <li><Link to="/Hooks/UseReducer" className="dropdown-item" >UseReduer</Link></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <p className=' mb-0 p-2 text-white' >Hi {myName}</p>
              <Link to='auth/login' className="btn btn-outline-light" >Login</Link>
            </form>\

          </div>
        </div>
      </nav>
    </>
  )
}
