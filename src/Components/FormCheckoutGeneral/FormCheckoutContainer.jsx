import React from "react";
import { Button } from "@mui/material";

const FormCheckoutContainer = ({ handleSubmit, userData, setUserData }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={userData.apellido}
          onChange={(e) => setUserData({ ...userData, apellido: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Algo@mail.com"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Repetir email"
          value={userData.verificacion}
          onChange={(e) =>
            setUserData({ ...userData, verificacion: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="123456"
          value={userData.telefono}
          onChange={(e) =>
            setUserData({ ...userData, telefono: e.target.value })
          }
          required
        />
        <Button variant="contained" color="error" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckoutContainer;
