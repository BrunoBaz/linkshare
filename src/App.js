import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LinkPage } from "./pages/LinkPage";
import { UserPage } from "./pages/UserPage";
import { useLinks } from "./hooks/useLinks";

function App() {
  const { links, error, loading, deleteLink, refreshLike, addLink } =
    useLinks();
  return (
    <main>
      <section className="header">
        <Header addLink={addLink} />
      </section>
      <section className="body">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                links={links}
                deleteLink={deleteLink}
                refreshLike={refreshLike}
                error={error}
                loading={loading}
              />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/link/:id" element={<LinkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
