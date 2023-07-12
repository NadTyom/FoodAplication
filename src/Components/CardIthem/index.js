import React from "react";

export default function CardIthem({ item }) {
  return (
    <div className="cardItem">
      <p className="title">{item.name}</p>
      <p>qanak -{item.counter}</p>
      <p className="arjeq"> Arjeqy - {item.price * item.counter}</p>
      <button>-</button>
      <button>+</button>
      <button className="delete">Delete</button>
    </div>
  );
}
