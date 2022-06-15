import { LinksList } from "../components/LinksList";

import { useLinks } from "../hooks/useLinks";

export const UserLinks = ({ id, refreshLikesInUserPage }) => {
  const { links, loading, error, deleteLink, refreshLike } = useLinks(id);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <LinksList
      links={links}
      deleteLink={deleteLink}
      refreshLike={refreshLike}
      userId={id}
      refreshLikesInUserPage={refreshLikesInUserPage}
    />
  );
};
