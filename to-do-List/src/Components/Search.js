import styles from "./Search.Module.css";
const Search = ({ setSearch }) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
