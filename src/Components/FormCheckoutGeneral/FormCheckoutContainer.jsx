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
        />
        <input
          type="email"
          placeholder="Algo@mail.com"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="telephone"
          placeholder="123456"
          value={userData.telefono}
          onChange={(e) =>
            setUserData({ ...userData, telefono: e.target.value })
          }
        />
        <Button variant="contained" color="error" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckoutContainer;
