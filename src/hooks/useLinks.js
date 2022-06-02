import { useEffect, useState } from "react";
import { getAllLinksService } from "../services/getAllLinksService";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);
        const data = await getAllLinksService();
        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLinks();
  }, []);
  const addLink = (data) => {
    setLinks([data, ...links]);
  };
  const refreshLike = (like) => {
    setLinks([like, ...links]);
  };
  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };
  return { links, loading, error, addLink, deleteLink, refreshLike };
};
