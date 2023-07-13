import React from "react";

export default function CardIthem({ item, onUp, onDown, onDelete }) {
  return (
    <div className="cardItem">
      <p className="title">{item.name}</p>
      <p>qanak -{item.counter}</p>
      <p className="arjeq"> Arjeqy - {item.price * item.counter}</p>
      <button onClick={() => onDown(item)}>-</button>
      <button onClick={() => onUp(item)}>+</button>
      <button onClick={() => onDelete(item)} className="delete">
        Delete
      </button>
    </div>
  );
}
