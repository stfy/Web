import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const { isBlocked } = props;
  return (
    <aside className="sidebar-menu">
      <label className="sidebar-menu__close" htmlFor="sidebar-menu-activation">
        <i className="icon icon-close" />
      </label>
      <div className="sidebar-menu__logo">
        <a href="http://berezka.io">
          <SidebarLogo />
        </a>
      </div>
      {!isBlocked ? (
        <nav className="sidebar-menu__items">
          <NavLink className="sidebar-menu__item" to="/account">
            My Account
          </NavLink>
          <NavLink className="sidebar-menu__item" to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
      ) : (
        ""
      )}
    </aside>
  );
}

function SidebarLogo() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6543 11.4155L20.1208 2.99683V20.6788L12.6543 11.4155Z"
        fill="#ECECEC"
      />
      <path
        d="M0.00292969 8.23279H10.8119L17.9668 0H0.00292969V8.23279Z"
        fill="#ECECEC"
      />
      <path
        d="M0.0026402 11.396L0 20.6645L8.05921 11.396H0.0026402Z"
        fill="#ECECEC"
      />
    </svg>
  );
}

export default Sidebar;
