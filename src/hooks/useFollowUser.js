import { useEffect, useState } from "react";
import { followUserService } from "../services/followUserService";

export const useFollowUser = async () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const data = await followUserService();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, []);
  const modifiedData = (data) => {
    setUserData(data);
  };
  return { userData, loading, error, modifiedData };
};
