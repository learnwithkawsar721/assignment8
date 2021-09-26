import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/home">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/price">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container">
        <div className="row my-5">
          <div className="col-8 mx-auto">
            <div className="banner">
              <h3 className="banner_title text-white">
                Bangla New Movie: <b>Mon Bose Na Prorar Table a</b>{" "}
              </h3>
              <h1 className="text-white">Movies Budget: 10 Million</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
