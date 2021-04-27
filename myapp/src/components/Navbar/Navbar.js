import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

export const Navbar = ({ logo, menus, name }) => {
  // const data = name ? (
  //   `Welcome${(<span>name</span>)}`
  // ) : (
  //   <img src={logo} alt="logo" />
  // );
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
        <Link class="navbar-brand">
          {name ? (
            <p>
              Welcome <span>{name}</span>
            </p>
          ) : (
            <img src={logo} alt="logo" />
          )}
        </Link>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <Link>Individual</Link>
            <Link>Corporation</Link>
            <Link>Advisor</Link>
            <Link>Contact Us</Link>
            <button>
              <SearchIcon />
            </button>
          </form>

        </div> */}
        <form class="d-flex">
          {menus.map((menu) => (
            <Link>{menu}</Link>
          ))}
          <button>
            <SearchIcon />
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
