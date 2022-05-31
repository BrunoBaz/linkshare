import { LinksList } from "../components/LinksList";
import { useLinks } from "../hooks/useLinks";

export const HomePage = () => {
  const { links, error, loading } = useLinks();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <LinksList links={links} />
    </section>
  );
};
