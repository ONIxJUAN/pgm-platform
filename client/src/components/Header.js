import React from "react";
import { routes } from "../routes/routes";
import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function clickHandler(e) {
    e.preventDefault();
    if (routes[e.target.innerText].path === "home") {
      navigate("/");
    } else {
      navigate(routes[e.target.innerText].path);
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    const search = e.target[0].value;
    navigate(`/search/${search}`);
  }
  const text = Object.keys(routes).map((page, index) => {
    if (page === "search") return null;
    return (
      <button key={page} onClick={clickHandler}>
        {page}
      </button>
    );
  });
  return (
    <header>
      <div>
        {text}
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
