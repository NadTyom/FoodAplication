import React from "react";
import Categories from "../Categories";
import logo from "../../images/logo.jpg"

export default function Header({onFilter}) {
  return (
    <>
      <img className="logo" alt="" src={logo} />
      <Categories onFilter={onFilter} />
    </>
  );
}
