import { useEffect, useState } from "react";
import { getAllLinksService } from "../services/getAllLinksService";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
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
  return { links, loading, error };
};
