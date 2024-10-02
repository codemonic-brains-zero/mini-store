import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/billing">Billing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
