import React from "react";
import { legacyTokenAddresses, tokenAddresses } from "./data/tokens";
import TotalPrice from "./widgets/TotalPrice";
import DAOAMainLogo, { DAOMainLogoMobile } from "./MainLogo";

class Title extends React.Component {
  render() {
    return (
      <section className="section" style={{ padding: 0 }}>
        <div className="section__header">
          <div className="page-index__wrapper">
            <div className="page-index__title container">
              <div className="page-index__title-left">
                <div className="page-index__main-logo">
                  <DAOAMainLogo />
                </div>
                <div className="page-index__main-logo--mobile">
                  <DAOMainLogoMobile />
                </div>
              </div>

              <div className="page-index__title-right">
                <div className="page-index__title__total-price">
                  <TotalPrice
                    tokens={tokenAddresses}
                    legacyTokens={legacyTokenAddresses}
                  />
                </div>
                <div className="page-index__title__total-price-label">
                  TOTAL VALUE OF ASSETS
                </div>

                <p className="page-index__description">
                  At present, making investments using DAOs (Decentralized
                  Autonomous Organizations) is the main way to preserve and
                  increase your capital.
                </p>

                <p className="page-index__description-appendix">
                  Your finances are managed by experienced finance and
                  cryptocurrency experts, all fund activities are transparent
                  and monitored using open protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Title;
