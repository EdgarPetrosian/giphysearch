import { Link } from "react-router-dom";
  
const Header = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <Link className="link" to="home">Home</Link> |{" "}
        <Link className="link" to="search">Search</Link>
      </nav>
    </div>
  );
}

export default Header;