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

const CarritoLink = () => {
  const { cart, vaciarCarrito, mutiplicadorDePrecio } = useContext(CartContext);

  const totalAPagar = mutiplicadorDePrecio()

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div className={styles.acomodarProducto}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Juego</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Total</TableCell>
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
                    <TableCell align="right">{elemento.nombre}</TableCell>
                    <TableCell align="right">{elemento.precio}</TableCell>
                    <TableCell align="right">0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      })}
      <Button variant="contained" color="error">
        comprar
      </Button>
      <Button variant="contained" color="error" onClick={vaciarCarrito}>
        Borrar productos
      </Button>
      <h2>Precio total = {totalAPagar}$</h2>
    </div>
  );
};

export default CarritoLink;
