export const SearchUser = ({ handleFilter }) => {
  return (
    <form style={{ marginTop: "5rem" }}>
      <label htmlFor="search">
        <input
          placeholder="Buscar Usuario"
          type="search"
          id="search"
          name="search"
          onChange={handleFilter}
        />
      </label>
    </form>
  );
};
