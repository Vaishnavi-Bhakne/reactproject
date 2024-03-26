import React,{useEffect} from 'react';
//import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import {Link,useLocation} from 'react-router-dom';
const Navbar = () => {
  var location=useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])
  return (
    <div>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==="/" ? 'active': ''}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname ==="/about" ? 'active': ''}`} to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul>
      <form className="d-flex">
       <Link to="/login"><button className="btn btn-primary mx-2 "type="button">Login</button></Link>
       <Link to="/signup"><button className="btn btn-primary mx-2 "type="button">Sign up</button></Link>
      </form>
    </div>
  </div>
</nav>
   </div>
  )
}
export default Navbar;