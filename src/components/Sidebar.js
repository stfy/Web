import React from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import { useTranslation } from "react-i18next";

function formatAddress(address) {
  return address.slice(0, 5) + "..." + address.slice(-5);
}

function Sidebar(props) {
  const { isBlocked, hideSidebar } = props;
  const { connectWeb3, address } = props;

  const { t, i18n } = useTranslation();

  const defaultLang = React.useMemo(() => {
    return localStorage.getItem("lang") || "en";
  }, []);

  const [lang, setLang] = React.useState(defaultLang);

  const changeLang = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);

    localStorage.setItem("lang", lang);
  };

  const mobile = (
    <aside className="sidebar-menu sidebar-menu--mobile">
      <div className="sidebar-nav">
        <NavLink
          to={"/"}
          onClick={() => hideSidebar()}
          className="sidebar-nav__item"
        >
          {t("sidebar.Main")}
        </NavLink>
        <NavLink
          to={"/"}
          onClick={() => hideSidebar()}
          className="sidebar-nav__item"
        >
          {t("sidebar.Strategies")}
        </NavLink>
        <NavLink
          to={"/"}
          onClick={() => hideSidebar()}
          className="sidebar-nav__item"
        >
          {t("sidebar.How it Works")}
        </NavLink>

        <NavLink
          to="/#flex"
          onClick={() => hideSidebar()}
          className="sidebar-nav__item sidebar-nav__item--bordered"
        >
          {t("sidebar.Join DAO")}
        </NavLink>

        <div className="sidebar-nav__item sidebar-nav__item--address">
          {address ? (
            formatAddress(address)
          ) : (
            <a onClick={connectWeb3}>{t("sidebar.Connect Wallet")}</a>
          )}
        </div>

        <NavLink
          to="/dashboard"
          onClick={() => hideSidebar()}
          className="sidebar-nav__item"
        >
          {t("sidebar.Dashboard")}
        </NavLink>
      </div>
      <div className="select-lang">
        <div
          className={
            "select-lang__item " +
            (lang === "ru" ? "select-lang__item--active" : "")
          }
          onClick={() => changeLang("ru")}
        >
          RU
        </div>
        <div
          className={
            "select-lang__item " +
            (lang === "en" ? "select-lang__item--active" : "")
          }
          onClick={() => changeLang("en")}
        >
          ENG
        </div>
      </div>
      <div className="try-email">
        <a href="mailto:info@forta.capital" className={"try-email__link"}>
          <div className={"try-email__title"}>{t("sidebar.Feedback")}</div>
          <span className={"try-email__icon"}>
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
      </div>
      <div className="sidebar-logo">
        <svg
          width="127"
          height="46"
          viewBox="0 0 127 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.41048 17.7365H0.378906L8.07862 0.344727H12.9373L20.6617 17.7365H15.5313H5.41048ZM15.5313 17.7365L10.475 5.16482L5.41872 17.7365H15.5313Z"
            fill="white"
          />
          <path
            d="M29.9591 4.13856V7.96509H37.6588V11.767H29.9591V17.7285H25.0264V0.33667H38.7047V4.13856H29.9591Z"
            fill="white"
          />
          <path
            d="M48.924 4.13856V7.96509H56.6237V11.767H48.924V17.7285H43.9912V0.33667H57.6695V4.13856H48.924Z"
            fill="white"
          />
          <path
            d="M66.6292 16.9155C65.1552 16.1354 64.0023 15.0597 63.1623 13.6884C62.3223 12.3171 61.9023 10.7652 61.9023 9.04076C61.9023 7.31636 62.3223 5.77262 63.1623 4.3931C64.0023 3.0218 65.1552 1.9379 66.6292 1.16603C68.1033 0.385942 69.7585 0 71.6032 0C73.4478 0 75.103 0.385942 76.5771 1.16603C78.0512 1.94611 79.2041 3.0218 80.044 4.3931C80.884 5.76441 81.304 7.31636 81.304 9.04076C81.304 10.7652 80.884 12.3089 80.044 13.6884C79.2041 15.0597 78.0512 16.1436 76.5771 16.9155C75.103 17.6956 73.4478 18.0815 71.6032 18.0815C69.7503 18.0815 68.0951 17.6956 66.6292 16.9155ZM73.9913 13.3846C74.7078 12.974 75.2677 12.3828 75.6877 11.6356C76.0995 10.8801 76.3136 10.0179 76.3136 9.04076C76.3136 8.0636 76.1077 7.20141 75.6877 6.44596C75.276 5.69051 74.7078 5.1075 73.9913 4.69693C73.2749 4.28636 72.4761 4.07286 71.6032 4.07286C70.722 4.07286 69.9232 4.27815 69.2068 4.69693C68.4903 5.1075 67.9304 5.69872 67.5104 6.44596C67.0986 7.20141 66.8845 8.0636 66.8845 9.04076C66.8845 10.0179 67.0904 10.8801 67.5104 11.6356C67.9221 12.391 68.4903 12.974 69.2068 13.3846C69.9232 13.7952 70.722 14.0087 71.6032 14.0087C72.4761 14.0087 73.2749 13.8034 73.9913 13.3846Z"
            fill="white"
          />
          <path
            d="M94.4718 13.1135H91.7789V17.7365H86.8462V0.344727H94.8176C96.3988 0.344727 97.7658 0.607492 98.9269 1.12481C100.088 1.65034 100.986 2.38936 101.62 3.35831C102.254 4.32726 102.567 5.46864 102.567 6.77425C102.567 8.0306 102.27 9.13093 101.686 10.067C101.093 11.0031 100.253 11.7339 99.1575 12.2677L102.921 17.7365H97.634L94.4718 13.1135ZM96.8187 4.88563C96.2999 4.44221 95.5423 4.2123 94.5294 4.2123H91.7872V9.30337H94.5294C95.5423 9.30337 96.3082 9.08166 96.8187 8.64646C97.3375 8.21125 97.5928 7.57897 97.5928 6.77425C97.5928 5.96132 97.3293 5.33726 96.8187 4.88563Z"
            fill="white"
          />
          <path
            d="M108.257 0.33667H116.509C118.419 0.33667 120.116 0.689761 121.59 1.40416C123.072 2.11855 124.217 3.12856 125.032 4.43417C125.847 5.73979 126.251 7.27533 126.251 9.03257C126.251 10.7898 125.847 12.3171 125.032 13.631C124.217 14.9366 123.072 15.9466 121.59 16.661C120.107 17.3754 118.419 17.7285 116.509 17.7285H108.257V0.33667ZM116.303 13.8116C117.802 13.8116 118.996 13.3928 119.902 12.5471C120.807 11.7013 121.26 10.5353 121.26 9.04078C121.26 7.5463 120.807 6.38028 119.902 5.53451C118.996 4.68873 117.793 4.26994 116.303 4.26994H113.19V13.8116H116.303Z"
            fill="white"
          />
          <path
            d="M4.68571 44.2104C3.22812 43.4385 2.08345 42.3628 1.25172 40.9833C0.419984 39.6038 0 38.0436 0 36.2946C0 34.5455 0.419984 32.9854 1.25172 31.6058C2.08345 30.2263 3.22812 29.1506 4.68571 28.3787C6.1433 27.6069 7.7903 27.2209 9.6267 27.2209C11.2243 27.2209 12.6654 27.5001 13.9501 28.0667C15.2347 28.6333 16.297 29.4462 17.1535 30.5137L13.9995 33.3549C12.8631 31.9918 11.4878 31.3102 9.87375 31.3102C8.92673 31.3102 8.07853 31.5155 7.33738 31.9343C6.59623 32.3531 6.01978 32.9361 5.60803 33.6915C5.19628 34.447 4.99864 35.3174 4.99864 36.2946C4.99864 37.2717 5.20451 38.1421 5.60803 38.8976C6.01978 39.653 6.58799 40.236 7.33738 40.6548C8.07853 41.0736 8.92673 41.2789 9.87375 41.2789C11.4878 41.2789 12.8631 40.5973 13.9995 39.2342L17.1535 42.0754C16.3053 43.1429 15.2347 43.9558 13.9501 44.5224C12.6654 45.089 11.2243 45.3682 9.6267 45.3682C7.7903 45.3682 6.1433 44.9822 4.68571 44.2104Z"
            fill="white"
          />
          <path
            d="M24.1203 45.0232H19.0723L26.7967 27.574H31.6718L39.4209 45.0232H34.2741H24.1203ZM34.2741 45.0232L29.2013 32.4105L24.1285 45.0232H34.2741Z"
            fill="white"
          />
          <path
            d="M55.0755 28.354C56.2449 28.8795 57.1425 29.6268 57.7766 30.5957C58.4107 31.5647 58.7236 32.7143 58.7236 34.0199C58.7236 35.3337 58.4107 36.4751 57.7766 37.4358C57.1425 38.3966 56.2449 39.1438 55.0755 39.6693C53.9062 40.1949 52.5309 40.4577 50.9498 40.4577H47.9028V45.0232H42.9536V27.5739H50.958C52.5309 27.5657 53.9062 27.8285 55.0755 28.354ZM52.9509 35.9085C53.4697 35.4651 53.725 34.841 53.725 34.0281C53.725 33.2152 53.4697 32.5829 52.9509 32.1313C52.4321 31.6796 51.6662 31.4579 50.6533 31.4579H47.9028V36.5654H50.6533C51.6662 36.5654 52.4321 36.3519 52.9509 35.9085Z"
            fill="white"
          />
          <path
            d="M63.2529 27.5659H68.2021V45.0152H63.2529V27.5659Z"
            fill="white"
          />
          <path
            d="M77.5816 31.4828H72.2041V27.5659H87.8835V31.4828H82.5308V45.0234H77.5816V31.4828Z"
            fill="white"
          />
          <path
            d="M93.9279 45.0232H88.8799L96.6043 27.574H101.479L109.229 45.0232H104.082H93.9279ZM104.082 45.0232L99.0089 32.4105L93.9362 45.0232H104.082Z"
            fill="white"
          />
          <path
            d="M112.761 27.5659H117.71V41.1065H126.061V45.0234H112.761V27.5659Z"
            fill="white"
          />
        </svg>
      </div>
    </aside>
  );

  const desktop = (
    <aside className="sidebar-menu">
      <label className="sidebar-menu__close" htmlFor="sidebar-menu-activation">
        <i className="icon icon-close" />
      </label>
      <div className="sidebar-menu__logo">
        <a href="/">
          <SidebarLogo />
        </a>
      </div>
      {!isBlocked ? (
        <nav className="sidebar-menu__items">
          <NavLink className="sidebar-menu__item" to="/account">
            {t("sidebar.My Account")}
          </NavLink>
          <NavLink className="sidebar-menu__item" to="/dashboard">
            {t("sidebar.Dashboard")}
          </NavLink>
        </nav>
      ) : (
        ""
      )}
    </aside>
  );

  return (
    <>
      <Media query={`(min-width: 768px)`} render={() => desktop} />
      <Media query={`(max-width: 767px)`} render={() => mobile} />
    </>
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
