
import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

import NavBar from "../NavBar/NavBar";
const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="/mac/">
                  Mac
                </a> */}
                <NavBar LinkUrl="/Mac/" LinkName="Mac" />
              </li>
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#">
                  iphone
                </a> */}
                <NavBar LinkUrl="/iphones/" LinkName="iphone" />
              </li>
              <li className="nav-item">
                <NavBar LinkUrl="/Ipad/" LinkName="Ipad" />
                {/* <a className="nav-link js-scroll-trigger" href="#">
                  ipad
                </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  watch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  tv
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={searchIcon} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cart} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
