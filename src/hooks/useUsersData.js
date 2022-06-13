import { useEffect, useState } from "react";
import { getUserByIdDataService } from "../services/getUserByIdDataService";
import { getLikesFromUsers } from "../services/getLikesFromUsers";
import { getAllUsersService } from "../services/getAllUsersService";

export const useUsersData = (id) => {
  const [userData, setUserData] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allLikes, setAllLikes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await getUserByIdDataService(id);
          const likes = await getLikesFromUsers(id);
          setAllLikes(likes);
          setUserData(data);
        }
        const user = await getAllUsersService();

        setAllUsers(user);
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
    allUsers,
    userData,
    allLikes,
    loading,
    error,
    modifiedData,
    refreshLikesInUserPage,
  };
};
