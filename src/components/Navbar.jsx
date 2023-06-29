import React from "react";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container">

        <div className="navbar-header">
          <p className="navbar-brand">Personal Site</p>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li id="home" className="nav-item"><a className="nav-link" href="/">HOME</a></li>
            <li id="items" className="nav-item"><a className="nav-link" href="/items">TO DOs</a></li>
            <li id="blogs" className="nav-item"><a className="nav-link" href="/posts">BLOGS</a></li>
            <li id="learning" className="nav-item"><a className="nav-link" href="/learnings">LEARNING</a></li>
            <li id="CP problems" className="nav-item"><a className="nav-link" href="/problems">CP PROBLEMS</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
export default Navbar;
