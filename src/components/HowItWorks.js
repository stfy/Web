import React from "react";
import { withTranslation } from "react-i18next";

class HowItWorks extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <section className="section HowItWorks" data-class="HowItWorks">
        <h2 className="title">{t("index.How it works")}</h2>

        <div className="steps__container">
          <div className="steps _centered">
            <div className="step">
              <div className="step__number">01</div>
              <div className="step__row">
                <div className="step__title">
                  {t("index.Choose your strategy")}
                </div>
                <div className="step__description">
                  <p>{t("index.Build your")}</p>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step__number">02</div>
              <div className="step__row">
                <div className="step__title">
                  {t("index.Deposit your stablecoin")}
                </div>
                <div className="step__description">
                  <p>{t("index.Just deposit")}</p>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step__number">03</div>
              <div className="step__row">
                <div className="step__title">{t("index.Redeem Instantly")}</div>
                <div className="step__description">
                  <p>{t("index.Monitor your")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(HowItWorks);
