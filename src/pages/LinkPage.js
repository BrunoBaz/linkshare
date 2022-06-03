import { useParams } from "react-router-dom";
import { Links } from "../components/Links";
import { useLinks } from "../hooks/useLinks";
import { useSingleLink } from "../hooks/useSingleLink";

export const LinkPage = () => {
  const { id } = useParams();
  const { link, loading, error } = useSingleLink(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <Links link={link} />
    </section>
  );
};
