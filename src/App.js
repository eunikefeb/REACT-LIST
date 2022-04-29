import React from "react";
import Main from "./Main";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
    <div class="container mt-3">
        <div className="card-header bg-dark text-white"><center><h3>React Bookstore</h3></center></div><br></br>
                <ul class="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/karya">Karya</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                </ul>  
        <Main/>
    </div>
    );
  }
}

export default App;