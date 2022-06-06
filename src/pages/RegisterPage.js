import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services/registerUserService";
import "./LoginRegisterPage.css";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    const data = {
      email,
      password,
      userName,
      nombre: name,
    };

    try {
      await registerUserService(data);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="body-login">
      <section className="form-login">
        <h1>Registrase</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="userName">
            Usuario (Opcional)
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="name">
            Nombre
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          {error ? <p>{error}</p> : null}
          <section className="opciones-login">
            <button className="boton-para-loguearse">registrarse</button>
            <Link to="/login" className="register/login">
              ← iniciar sesión
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
};
