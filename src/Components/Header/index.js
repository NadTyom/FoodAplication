import React from "react";
import Categories from "../Categories";

export default function Header({onFilter}) {
  return (
    <>
      <img className="logo" alt="" />
      <Categories onFilter={onFilter} />
    </>
  );
}
