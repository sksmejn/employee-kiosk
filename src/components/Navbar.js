import "../css/Navbar.css";
import "../css/Search.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <div className="logo-container">
          <h1>Employee Kiosk</h1>
        </div>
        <div className="list-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="break"></div>
    </nav>
  );
};

export default Navbar;