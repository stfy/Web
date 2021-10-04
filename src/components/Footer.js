import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
            <Link className="button" to="/#afford">
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
  const { t } = useTranslation();

  return (
    <div className="email">
      <a href="mailto:info@forta.capital" className={"email__link"}>
        <div className={"email__title"}>{t("sidebar.Feedback")}</div>
        <span className={"email__icon"}>
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1543 0.945557H1.8457C0.825932 0.945557 0 1.67724 0 2.57056V12.3206C0 13.2192 0.832002 13.9456 1.8457 13.9456H19.1543C20.1655 13.9456 21 13.2223 21 12.3206V2.57056C21 1.67883 20.1773 0.945557 19.1543 0.945557ZM18.8958 2.02889C18.5187 2.35913 12.0292 8.04258 11.8051 8.23881C11.4565 8.54575 10.993 8.71475 10.5 8.71475C10.007 8.71475 9.54352 8.54572 9.19373 8.2378C9.04304 8.10581 2.62512 2.48512 2.10418 2.02889H18.8958ZM1.23047 12.1001V2.79174L6.54765 7.44845L1.23047 12.1001ZM2.10496 12.8622L7.42005 8.21245L8.32482 9.00483C8.90585 9.51638 9.67833 9.79809 10.5 9.79809C11.3217 9.79809 12.0942 9.51639 12.674 9.00585L13.5799 8.21245L18.895 12.8622H2.10496ZM19.7695 12.1001L14.4523 7.44845L19.7695 2.79174V12.1001Z"
              fill="white"
            />
          </svg>
        </span>
        info@forta.capital
      </a>

      <svg
        width="165"
        height="48"
        viewBox="0 0 165 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M126.199 44.9346C122.401 42.9133 119.418 40.1176 117.251 36.5475C115.084 32.9773 114 28.9561 114 24.4837C114 20.0077 115.084 15.9861 117.251 12.4189C119.418 8.85174 122.401 6.05604 126.199 4.03186C129.998 2.01062 134.28 1 139.043 1C143.807 1 148.089 2.01062 151.889 4.03186C155.687 6.05369 158.67 8.84938 160.838 12.4189C163.006 15.9885 164.09 20.0101 164.089 24.4837C164.089 28.9596 163.006 32.9809 160.838 36.5475C158.671 40.1141 155.688 42.9098 151.889 44.9346C148.091 46.957 143.81 47.9679 139.046 47.9673C134.282 47.9667 129.999 46.9558 126.199 44.9346ZM145.224 35.7736C147.069 34.6994 148.528 33.1832 149.601 31.2249C150.675 29.2667 151.212 27.0196 151.211 24.4837C151.211 21.9465 150.675 19.6991 149.601 17.7415C148.528 15.7838 147.069 14.2676 145.224 13.1928C143.378 12.1186 141.318 11.5812 139.043 11.5806C136.769 11.58 134.709 12.1174 132.863 13.1928C131.017 14.2688 129.558 15.785 128.485 17.7415C127.413 19.6979 126.876 21.9453 126.876 24.4837C126.876 27.022 127.412 29.2691 128.485 31.2249C129.558 33.1808 131.018 34.697 132.863 35.7736C134.708 36.8496 136.768 37.3873 139.043 37.3867C141.319 37.3861 143.379 36.8484 145.224 35.7736Z"
          fill="white"
          fill-opacity="0.98"
        />
        <path
          d="M0 48V0H20.6013C24.6787 0 28.2195 0.978817 31.2238 2.93645C34.228 4.89408 36.5456 7.69007 38.1764 11.3244C39.8072 14.9599 40.6227 19.2318 40.6227 24.14C40.6227 28.8627 39.861 32.9794 38.3377 36.4901C36.8144 40.0007 34.6362 42.7502 31.8029 44.7385C31.8029 44.7385 26.653 47.9072 19.6995 47.9072H12.7469L0 48ZM25.7512 17.0569C24.4207 15.379 22.4464 14.54 19.8282 14.54H12.7469V33.6473H19.8282C22.4464 33.6473 24.4207 32.8228 25.7512 31.1737C27.0818 29.5247 27.747 27.1789 27.747 24.1365C27.747 21.0958 27.0818 18.7359 25.7512 17.0569Z"
          fill="white"
          fill-opacity="0.98"
        />
        <path
          d="M65.1552 46.8808H52.1509L72.0435 1.71924H84.5991L104.557 46.8808H91.2926H65.1552ZM91.312 46.8808L78.2239 14.2354L65.1358 46.8808H91.312Z"
          fill="white"
          fill-opacity="0.98"
        />
      </svg>

      {/*<a href="mailto:info@forta.capital" className={"email__link"}>*/}
      {/*  <span className={"email__icon"}>*/}
      {/*    <EmailIcon />*/}
      {/*  </span>*/}
      {/*  info@forta.capital*/}
      {/*</a>*/}
    </div>
  );
}

function Copyright() {
  return (
    <div className="copyright">
      © ${new Date().getFullYear()} Afford Capital
    </div>
  );
}

function Policy() {
  const { t } = useTranslation();

  return (
    <div className="policy">
      <Link className="policy__link" to="/privacy">
        {t("index.Privacy Policy")}
      </Link>
      <Link className="policy__link" to="/cookie">
        {t("index.Cookie Policy")}
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
