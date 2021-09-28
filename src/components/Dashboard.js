import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TokenDashboard from "./TokenDashboard";
import TokenDashboardNavigation from "./TokenDashboardNavigation";
import TokenOnChainValidation from "./TokenOnChainValidation";
import DAOAMainLogo from "./MainLogo";
import TotalPrice from "./widgets/TotalPrice";
import { legacyTokenAddresses, tokenAddresses, tokenInfo } from "./data/tokens";
import TokenPrice from "./widgets/TokenPrice";

function Dashboard(props) {
  const { web3Global, address } = props;

  const [token, setTokenName] = React.useState(null);

  const info = React.useMemo(() => {
    if (!tokenInfo[token]) {
      return null;
    }

    return tokenInfo[token];
  }, [token]);

  const tokenAddress = info?.address;
  const isLegacy = info?.isLegacy;

  return (
    <div className="page dashboard PageDashboard">
      <section className="section">
        <div className="page-index__wrapper">
          <div className="page-index__title">
            <div className="page-index__title-left">
              <DAOAMainLogo />
            </div>

            <div className="page-index__title-right">
              <div className="page-index__title__total-price">
                {tokenAddress && (
                  <TokenPrice
                    tokenAddress={tokenAddress}
                    dollarSeparator=" "
                    separator=" "
                    isLegacy={isLegacy}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="section__header">
          <h1 className="title">Dashboard</h1>
        </div>
        <div className="section__breadcrumbs">
          <TokenDashboardNavigation />
        </div>
        <Switch>
          <Route
            path="/dashboard/:id"
            render={(routeProps) => (
              <TokenDashboard
                web3Global={web3Global}
                address={address}
                setTokenName={setTokenName}
                {...routeProps}
              />
            )}
          />
          <Redirect from="/dashboard" to="/dashboard/afford" />
        </Switch>
      </section>
    </div>
  );
}

export default Dashboard;
