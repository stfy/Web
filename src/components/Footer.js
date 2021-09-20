import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const { isBlocked } = props;

  return (
    <footer className="footer">
      <Policy />
      <Email />
      <Copyright />
    </footer>
  );

  return (
    <footer className="footer">
      <form className="footer__form">
        <input
          className="input _light"
          type="email"
          placeholder="Email for updates"
        />
        <div className="buttons">
          <a className="button _light _middle" href>
            Get updates
          </a>
          <span>Let’s build DeFi community together</span>
        </div>
      </form>

      {!isBlocked ? (
        <div className="footer__bottom">
          <nav className="footer__menu">
            <Link className="footer__menu-item" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="footer__menu-item" to="/cookie">
              Cookie Policy
            </Link>
          </nav>
          <div className="buttons">
            <Link className="button _light" to="/dashboard">
              Dashboard
            </Link>
            <Link className="button" to="/#flex">
              Join Dao
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
}

function Email() {
  return (
    <div className="email">
      <a href="mailto:info@forta.capital" className={"email__link"}>
        <span className={"email__icon"}>
          <EmailIcon />
        </span>
        info@forta.capital
      </a>
    </div>
  );
}

function Copyright() {
  return <div className="copyright">© 2021 Forta Capital</div>;
}

function Policy() {
  return (
    <div className="policy">
      <Link className="policy__link" to="/privacy">
        Privacy Policy
      </Link>
      <Link className="policy__link" to="/cookie">
        Cookie Policy
      </Link>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1543 0.501465H1.8457C0.825932 0.501465 0 1.19047 0 2.03168V11.213C0 12.0592 0.832002 12.7432 1.8457 12.7432H19.1543C20.1655 12.7432 21 12.062 21 11.213V2.03168C21 1.19196 20.1773 0.501465 19.1543 0.501465ZM18.8958 1.52161C18.5187 1.83258 12.0292 7.18451 11.8051 7.3693C11.4565 7.65834 10.993 7.81748 10.5 7.81748C10.007 7.81748 9.54352 7.6583 9.19373 7.36834C9.04304 7.24406 2.62512 1.95122 2.10418 1.52161H18.8958ZM1.23047 11.0053V2.23996L6.54765 6.62503L1.23047 11.0053ZM2.10496 11.723L7.42005 7.34447L8.32482 8.09064C8.90585 8.57235 9.67833 8.83762 10.5 8.83762C11.3217 8.83762 12.0942 8.57235 12.674 8.09159L13.5799 7.34447L18.895 11.723H2.10496ZM19.7695 11.0053L14.4523 6.62503L19.7695 2.23996V11.0053Z"
        fill="white"
      />
    </svg>
  );
}

export default Footer;
