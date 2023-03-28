import React, { useState } from "react";

const Login = () => {
  const [userData, SetUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const errorInData = {
    nameError: "",
    emailError: "",
    passwordError: "",
  };
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(errorInData);
  const handleChange = (e) => {
    SetUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValido = userData.email.includes("@");
    const psV = userData.password.trim();
    const passwordIsValid = userData.password === psV;
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("El nombre debe contener al menos 5 caracteres");
      return;
    } else if (!emailValido) {
      setError(true);
      setErrorMessage("El email debe contener una @");
      return;
    } else if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "La contraseña no puede contener espacios ni menos de 5 caracteres"
      );
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Nombre de usuario:</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
        <h2>Direccion de correo electronico:</h2>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <h2>Contraseña:</h2>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button>Aceptar</button>
      </form>
      {error && <h2>{errorMessage}</h2>}
      {userData["name"].length > 5 && <h2>Nombre: {userData["name"]}</h2>}
      {userData["email"].includes("@") && <h2>Email: {userData["email"]}</h2>}
    </div>
  );
};

export default Login;
