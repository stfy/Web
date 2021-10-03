import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function formatAddress(address) {
  return address.slice(0, 5) + "..." + address.slice(-5);
}

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
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
            <line y1="8" x2="20" y2="8" stroke="white" strokeWidth="2" />
            <line y1="15" x2="20" y2="15" stroke="white" strokeWidth="2" />
          </svg>
        </label>
        <nav className="header__menu">
          <div className={"header__menu-links"}>
            <Link className="header__menu-item" to="/">
              About us
            </Link>
            <Link className="header__menu-item" to="/">
              Strategies
            </Link>
            <a
              className="header__menu-item"
              target="_blank"
              href="https://medium.com/berezka-dao"
            >
              How It Works
            </a>

            <Link className="header__menu-item" to="/dashboard">
              Dashboard
            </Link>
          </div>

          <div className={"header__menu-actions"}>
            <div className="header__menu-item header__menu-item--address">
              {address ? (
                <div
                  className="connect__value header__title"
                  style={{ margin: "0 10px 0 0" }}
                >
                  {formatAddress(address)}
                </div>
              ) : (
                <a className="header__menu-item" onClick={connectWeb3}>
                  Connect wallet
                </a>
              )}
            </div>

            <Link
              className="header__menu-item header__menu-item--bordered"
              to="/#afford"
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
