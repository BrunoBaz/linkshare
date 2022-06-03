import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const UserPage = () => {
  const { user, token } = useContext(AuthContext);
  return;
};
