import React from 'react'
import CardIthem from "../CardIthem"
export default function Card({items}) {
  return <div className='card'>
    {
      items.map((elm,i)=>{
        return <CardIthem key={i} item={elm} />
      })
    }
  </div>;
}
