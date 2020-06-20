import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink to="/" className="navbar-brand" activeClassName="nav-link active">JOIN AND BUY</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
    <NavLink to="/" exact className="nav-link" activeClassName="nav-link active">Home</NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/formexample" className="nav-link" activeClassName="nav-link active">Form Example</NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/formbuilder" className="nav-link" activeClassName="nav-link active">Form Builder</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
