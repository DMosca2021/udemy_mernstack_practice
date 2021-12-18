import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
