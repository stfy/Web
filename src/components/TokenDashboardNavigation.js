import React from "react";
import { NavLink } from "react-router-dom";
import { dashboardTokens, tokenInfo } from "./data/tokens";
import { useTranslation } from "react-i18next";

function TokenDashboardNavigation() {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs">
      {dashboardTokens.map((token) => (
        <NavLink
          key={token}
          className="breadcrumbs__item"
          to={`/dashboard/${token}`}
        >
          <span>{t(`token.${tokenInfo[token].name}`)}</span>
          <span className="breadcrumbs__delimiter" />
        </NavLink>
      ))}
    </div>
  );
}

export default TokenDashboardNavigation;
