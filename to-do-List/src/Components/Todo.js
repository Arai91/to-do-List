import styles from "./Todo.module.css";
const Todo = ({ todo, deleteHandler, search }) => {
  return (
    <div className={styles.container}>
      {todo
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.text.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div key={item.id} className={styles.todo}>
              <h2>{item.text}</h2>
            </div>
          );
        })}
    </div>
  );
};
export default Todo;
