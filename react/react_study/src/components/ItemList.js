import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default React.memo(ItemList);
