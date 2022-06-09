import { useEffect, useState } from "react";
import { getCommentService } from "../services/getCommentService";
import { getSingleLinkService } from "../services/getSingleLinkService";

export const useGetComments = (id) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const data = await getCommentService(id);
        setComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, [id]);
  const refreshComments = (data) => {
    console.log(data);
    setComments(data);
  };

  return { comments, loading, error, refreshComments };
};
