import { useContext } from "react";
import { LinksList } from "../components/LinksList";
import { AuthContext } from "../context/AuthContext";
import { useLinks } from "../hooks/useLinks";

export const HomePage = () => {
  const { links, error, loading, addLink, deleteLink, refreshLike } =
    useLinks();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <LinksList
        links={links}
        deleteLink={deleteLink}
        refreshLike={refreshLike}
      />
    </section>
  );
};
