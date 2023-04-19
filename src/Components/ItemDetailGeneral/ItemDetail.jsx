import React from "react";
import ItemCount from "./itemCount";
import styles from "./itemDetail.module.css"

const ItemDetail = ({productSelected, onAdd, cantidadQ}) => {
  return (
    <div className={styles.productStyle}>
      <h1>{productSelected.nombre}</h1>
      <h2>{productSelected.precio}$</h2>
      <img src={productSelected.imgSrc} alt="" />
      <h3 className={styles.acomodarDescripcion}>{productSelected.descripcion}</h3>

      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={cantidadQ}
      />
    </div>
  )
    
  
};

export default ItemDetail;
