import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<p>Estamos en el perfil usuario</p>} />
        <Route path="/link/:id" element={<p>Estamos en el link con id ?</p>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
