import { Link } from "react-router-dom";

const about = () => {
  return (
    <div className="app">
      <h1>About</h1>
      <Link to="/contact">Contact</Link>
      <div className="btn">
        <p>nope</p>
      </div>
    </div>
  );
};

export default about;
