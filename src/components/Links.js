import { ReactTinyLink } from "react-tiny-link";

export const Links = ({ link }) => {
  return (
    <article>
      <h2>{link.titulo}</h2>
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        width="30rem"
        url={link.url}
      />
      <p>{link.descripcion}</p>
      <p>Created at {new Date(link.created_at).toLocaleString()}</p>
    </article>
  );
};
