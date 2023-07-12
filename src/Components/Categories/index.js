import React from "react";

export default function Categories({onFilter}) {
  const categories= ["All","Pizza","Fruits","Drinc","Coffe"]
  return (
    <>
      <ul className="horizontal">
        {
          categories.map((elm,index)=>{
            return <li onClick={()=>{onFilter(elm)}} key={index}>{elm}</li>
          })
        }
      </ul>
    </>
  );
}
