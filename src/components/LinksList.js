import { Links } from "./Links";

export const LinksList = ({ links, deleteLink, refreshLike }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Links
            link={link}
            deleteLink={deleteLink}
            refreshLike={refreshLike}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links</p>
  );
};
