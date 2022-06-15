import { useCallback, useMemo, useState } from "react";
import { AllUsers } from "../components/AllUsers";
import { SearchUser } from "../components/SearchUser";
import { useUsersData } from "../hooks/useUsersData";
import "../styles/SearchUsersPage.css";

export const SearchUsersPage = () => {
  const { allUsers } = useUsersData();
  const [filter, setFilter] = useState("");

  const filteredUsers = useMemo(() => {
    if (!filter) return allUsers;
    return allUsers.filter((person) =>
      person.userName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [allUsers, filter]);

  const handleFilter = useCallback((e) => {
    e.preventDefault();
    setFilter(e.target.value);
  }, []);
  return (
    <section className="body-searchuser">
      <SearchUser handleFilter={handleFilter} />
      <AllUsers users={filteredUsers} />
    </section>
  );
};
