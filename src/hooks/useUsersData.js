import { useEffect, useState } from "react";
import { getAllUserDataService } from "../services/getAllUserDataService";
import { getLikesFromUsers } from "../services/getLikesFromUsers";

export const useUsersData = (id) => {
  const [userData, setUserData] = useState(null);
  const [allLikes, setAllLikes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const data = await getAllUserDataService(id);
        const likes = await getLikesFromUsers(id);
        setAllLikes(likes);
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
  const refreshLikesInUserPage = () => {
    const loadLink = async () => {
      try {
        setLoading(true);

        const likes = await getLikesFromUsers(id);
        setAllLikes(likes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  };

  return {
    userData,
    allLikes,
    loading,
    error,
    modifiedData,
    refreshLikesInUserPage,
  };
};
