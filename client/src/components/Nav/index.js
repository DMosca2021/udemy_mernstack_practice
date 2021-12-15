import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/game">Game</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
