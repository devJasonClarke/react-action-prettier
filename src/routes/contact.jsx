import { Link } from "react-router-dom";
import styles from "./contact.module.scss";
const contact = () => {
  return (
    <div className="app">
      <h1>Contact</h1>
      <Link to="/">Home</Link>
      <div className={styles.btn}>
        <p>nope</p>
      </div>
    </div>
  );
};

export default contact;
