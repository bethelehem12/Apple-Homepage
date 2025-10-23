import { Link } from "react-router";
function NavBar({ LinkName, LinkUrl }) {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
        {LinkName}
      </Link>
    </li>
  );
}

export default NavBar;
