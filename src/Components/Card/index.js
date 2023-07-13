import React from "react";
import CardIthem from "../CardIthem";
export default function Card({ items, total,onUp,onDown,onDelete}) {
  return (
    <div className="card">
      <p className="total">
        Total -<span>{total}</span>
      </p>
      {items.map((elm, i) => {
        return (<CardIthem onUp={onUp} onDown={onDown} onDelete={onDelete} key={i} item={elm} />);
      })}
    </div>
  );
}
