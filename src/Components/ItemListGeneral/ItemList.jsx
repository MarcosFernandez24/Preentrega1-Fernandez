import React from "react";
import Item from "./Item";

const ItemList = ({ itemss }) => {
  return (
    <div>
      {itemss.map((Elementos) => {
        return <Item key={Elementos.id} Elementos={Elementos} />;
      })}
    </div>
  );
};

export default ItemList;
