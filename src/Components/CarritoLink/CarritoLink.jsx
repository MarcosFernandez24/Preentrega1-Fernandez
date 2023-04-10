import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./carritoLink.module.css";
import Swal from "sweetalert2";
import { useEffect } from "react";

const CarritoLink = () => {
  const { cart, vaciarCarrito, mutiplicadorDePrecio, eliminarProductox1 } =
    useContext(CartContext);

  const totalAPagar = mutiplicadorDePrecio();

  const confirmClear = () => {
    Swal.fire({
      title: "Queres vaciar el carrito?",
      text: "Se removeran todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Se vacio el carrito.", "", "success");
      }
    });
  };

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div className={styles.acomodarProducto} key={elemento.id}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Juego</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={elemento.imgSrc} alt="" />
                    </TableCell>
                    <TableCell align="right">{elemento.quantity}</TableCell>
                    <Button variant="contained" color="error">
                      ↑
                    </Button>
                    <Button variant="contained" color="error">
                      ↓
                    </Button>
                    <TableCell align="right">{elemento.nombre}</TableCell>
                    <TableCell align="right">{elemento.precio}$</TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => eliminarProductox1(elemento.id)}
                    >
                      Eliminar
                    </Button>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      })}

      {cart.length > 0 && (
        <div>
          <Button variant="contained" color="error">
            comprar
          </Button>
          <Button variant="contained" color="error" onClick={confirmClear}>
            Borrar productos
          </Button>
        </div>
      )}
      <h2>Precio total = {totalAPagar}</h2>
    </div>
  );
};

export default CarritoLink;
