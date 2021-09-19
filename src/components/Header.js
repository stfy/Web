import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { connectWeb3, address } = props;
  const [scroll, setScroll] = useState(false);

  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 50)
      ),
    []
  );

  return (
    <header className={"header " + (scroll ? "_scroll" : "")}>
      <div className="header__main">
        <label
          className="header__sidebar-open"
          htmlFor="sidebar-menu-activation"
        >
          <i className="icon icon-menu" />
        </label>
        <nav className="header__menu">
          <div className={"header__menu-links"}>
            <Link className="header__menu-item" to="/">
              Home
            </Link>
            <Link className="header__menu-item" to="/">
              About us
            </Link>
            <a
              className="header__menu-item"
              target="_blank"
              href="https://medium.com/berezka-dao"
            >
              Blog
            </a>

            <Link className="header__menu-item" to="/dashboard">
              Dashboard
            </Link>
          </div>

          <div className={"header__menu-actions"}>
            {address ? (
              <div
                className="connect__value header__title"
                style={{ margin: "0 10px 0 0" }}
              >
                {address}
              </div>
            ) : (
              <a className="header__menu-item" onClick={connectWeb3}>
                Connect wallet
              </a>
            )}

            <Link
              className="header__menu-item header__menu-item--bordered"
              to="/#flex"
            >
              Join Dao
            </Link>
          </div>
        </nav>
        {/*<div className="desktop_only header__title">*/}
        {/*  #Berezka DAO - DeFi Asset Management*/}
        {/*</div>*/}
      </div>
      <div
        className="buttons"
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: "0 0 auto",
        }}
      ></div>
    </header>
  );
}

export default Header;
