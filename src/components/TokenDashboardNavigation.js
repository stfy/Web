import React from "react";
import { NavLink } from "react-router-dom";
import { dashboardTokens, tokenInfo } from "./data/tokens";

function TokenDashboardNavigation() {
  return (
    <div className="breadcrumbs">
      {dashboardTokens.map((token) => (
        <NavLink
          key={token}
          className="breadcrumbs__item"
          to={`/dashboard/${token}`}
        >
          <span>{tokenInfo[token].fullName || tokenInfo[token].name}</span>
          <span className="breadcrumbs__delimiter" />
        </NavLink>
      ))}
    </div>
  );
}

export default TokenDashboardNavigation;
