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
import { FollowPage } from "./pages/FollowPage";
import { FollowerPage } from "./pages/FollowerPage";
import { SearchUsersPage } from "./pages/SearchUsersPage";

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
          <Route path="/search_user" element={<SearchUsersPage />} />

          <Route path="/user/:id/follow" element={<FollowPage />} />
          <Route path="/user/:id/follower" element={<FollowerPage />} />
          <Route path="/link/:id" element={<LinkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>

      <Footer />
    </main>
  );
}

export default App;
