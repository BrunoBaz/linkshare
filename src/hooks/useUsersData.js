import { useEffect, useState } from "react";
import { getAllUserDataService } from "../services/getAllUserDataService";

export const useUsersData = (id) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const data = await getAllUserDataService(id);
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, [id]);
  const modifiedData = (data) => {
    setUserData(data);
  };
  return { userData, loading, error, modifiedData };
};
