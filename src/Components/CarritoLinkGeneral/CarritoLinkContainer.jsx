import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./carritoLink.module.css";
import FormCheckout from "../FormCheckoutGeneral/FormCheckout";

const CarritoLinkContainer = ({
  showForm,
  cart,
  eliminarProductox1,
  setShowForm,
  confirmClear,
  totalAPagar,
  mutiplicadorDePrecio,
  setOrderId,
  vaciarCarrito,
}) => {
  return (
    <div>
      {!showForm ? (
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img src={elemento.imgSrc} alt="" />
                        </TableCell>
                        <TableCell align="right">{elemento.quantity}</TableCell>
                        <TableCell align="right">{elemento.nombre}</TableCell>
                        <TableCell align="right">{elemento.precio}$</TableCell>
                        <td>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => eliminarProductox1(elemento.id)}
                          >
                            Eliminar
                          </Button>
                        </td>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            );
          })}

          {cart.length > 0 && (
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => setShowForm(true)}
              >
                Pasar a finalizar la compra
              </Button>
              <Button variant="contained" color="error" onClick={confirmClear}>
                Borrar productos
              </Button>
            </div>
          )}
          <h2>Precio total = {totalAPagar}</h2>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          mutiplicadorDePrecio={mutiplicadorDePrecio}
          setOrderId={setOrderId}
          vaciarCarrito={vaciarCarrito}
        />
      )}
    </div>
  );
};

export default CarritoLinkContainer;
