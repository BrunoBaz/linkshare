import { Links } from "./Links";

export const LinksList = ({ links, deleteLink }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Links link={link} deleteLink={deleteLink} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links</p>
  );
};
