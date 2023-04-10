import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>

      <Button variant="contained" color="error" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" color="error" onClick={restar}>
        -
      </Button>
      <Button variant="contained" color="error" onClick={() => onAdd(contador)}>
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};

export default ItemCount;
