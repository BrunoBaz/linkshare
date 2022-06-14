import { useParams } from "react-router-dom";
import { CreateComment } from "../components/CreateComment";
import { Links } from "../components/Links";
import { useSingleLink } from "../hooks/useSingleLink";
import "./LinkPage.css";

export const LinkPage = () => {
  const { id } = useParams();
  const { link, loading, error, refreshSingleLike } = useSingleLink(id);
  const idPost = id;

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="body-links">
        <Links
          link={link}
          refreshSingleLike={refreshSingleLike}
          idPost={idPost}
        />
        {idPost && <CreateComment id={idPost} />}
      </section>
    </>
  );
};
