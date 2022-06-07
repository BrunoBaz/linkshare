import { useEffect, useState } from "react";
import { getAllLinksService } from "../services/getAllLinksService";
import { getLinksByUserId } from "../services/getLinksByUserId";

export const useLinks = (id) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = id
          ? await getLinksByUserId({ id })
          : await getAllLinksService();
        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLinks();
  }, [id]);

  const refreshLike = (data) => {
    setLinks([...data]);
  };
  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };
  const addLink = (data) => {
    setLinks([data, ...links]);
  };

  return { links, loading, error, addLink, deleteLink, refreshLike };
};
