import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-logo">SolVows</div>
      </Link>
      <Link to="/wedding">
        <div className="navbar-buttons">
          <div>Get Hitched</div>
        </div>
      </Link>
    </div>
  );
}
