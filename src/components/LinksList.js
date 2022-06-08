import { Links } from "./Links";

export const LinksList = ({
  links,
  deleteLink,
  refreshLike,
  userId,
  refreshLikesInUserPage,
}) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Links
            link={link}
            deleteLink={deleteLink}
            refreshLike={refreshLike}
            userId={userId}
            refreshLikesInUserPage={refreshLikesInUserPage}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links</p>
  );
};
