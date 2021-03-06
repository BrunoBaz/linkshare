import { useState } from "react";
import { LinksList } from "../components/LinksList";

import "../styles/HomePage.css";

export const HomePage = ({
  links,
  loading,
  error,
  deleteLink,
  refreshLike,
  refreshComments,
  comments,
}) => {
  const [filter, setFilter] = useState("");

  const filteredLinks = () => {
    if (!filter) return links;
    return links.filter((link) =>
      link.titulo.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleSearchLink = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="body-home">
      <form className="body-buscar-post">
        <label className="buscar-post">
          <input
            placeholder="Buscar post"
            type="search"
            name="search"
            onChange={handleSearchLink}
          />
        </label>
      </form>
      <LinksList
        links={filteredLinks()}
        comments={comments}
        deleteLink={deleteLink}
        refreshLike={refreshLike}
        refreshComments={refreshComments}
      />
    </section>
  );
};
