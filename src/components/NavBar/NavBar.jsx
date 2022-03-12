// import SelectBar from "../Select/SelectBar";
import styles from "./NavBar.module.css";
import Select from "react-select";

const NavBar = ({ unCompletedTodos, selectedOption, onChange, todos }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!unCompletedTodos) return <h2>add your today todos!!!</h2>;

  const renderNavBar = () => {
    return (
      <header className={styles.header}>
        
        <h2>you have <span className={styles.badge}>{unCompletedTodos}</span> uncompleted todos</h2>

        {todos.length > 1 ? (
          <Select
            className={styles.select}
            options={options}
            value={selectedOption}
            onChange={onChange}
          />
        ) : null}
      </header>
    );
  };

  return renderNavBar();
};

export default NavBar;
