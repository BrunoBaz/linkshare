import { useEffect, useState } from "react";
import { getSingleLinkService } from "../services/getSingleLinkService";

export const useSingleLink = (id) => {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const data = await getSingleLinkService(id);
        setLink(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, []);
  console.log(link);
  return { link, loading, error };
};
