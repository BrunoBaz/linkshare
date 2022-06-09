import { useEffect, useState } from "react";
import { getFollowerUserService } from "../services/getFollowerUserService";
import { getFollowUserService } from "../services/getFollowUserService";

export const useFollowSystem = (id) => {
  const [follow, setFollow] = useState([]);
  const [follower, setFollower] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const dataFollow = await getFollowUserService(id);
        const dataFollower = await getFollowerUserService(id);
        console.log(dataFollow);
        setFollow(dataFollow);
        setFollower(dataFollower);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  }, [id]);
  const refreshFollow = () => {
    const loadLink = async () => {
      try {
        setLoading(true);
        const dataFollow = await getFollowUserService(id);
        const dataFollower = await getFollowerUserService(id);
        setFollow(dataFollow);
        setFollower(dataFollower);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadLink();
  };

  return { follow, follower, loading, error, refreshFollow };
};
