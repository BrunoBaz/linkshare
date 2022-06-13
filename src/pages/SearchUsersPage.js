import { useState } from "react";
import { Link } from "react-router-dom";
import { AllUsers } from "../components/AllUsers";
import { SearchUser } from "../components/SearchUser";
import { useUsersData } from "../hooks/useUsersData";
import "./SearchUsersPage.css";

export const SearchUsersPage = () => {
  const { allUsers } = useUsersData();
  const [filter, setFilter] = useState("");

  const filteredUsers = () => {
    if (!filter) return allUsers;
    return allUsers.filter((person) =>
      person.userName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  return (
    <section className="body-searchuser">
      <SearchUser handleFilter={handleFilter} />
      <AllUsers users={filteredUsers()} />
    </section>
  );
};
