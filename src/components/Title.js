import React from "react";
import { legacyTokenAddresses, tokenAddresses } from "./data/tokens";
import TotalPrice from "./widgets/TotalPrice";
import DAOAMainLogo, { DAOMainLogoMobile } from "./MainLogo";
import { withTranslation } from "react-i18next";

class Title extends React.Component {
  render() {
    const { t } = this.props;

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
                  {t("index.TOTAL VALUE OF ASSETS")}
                </div>

                <p className="page-index__description">{t("index.desc")}</p>

                <p className="page-index__description-appendix">
                  {t("index.desc-appendix")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Title);
