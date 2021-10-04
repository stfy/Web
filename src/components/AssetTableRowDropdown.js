import React from "react";
import OnChainValidation from "./OnChainValidation";
import TokenRequestController from "./TokenRequestController";
import TokenRequestEmbedded from "./TokenRequestEmbedded";
import { Trans, useTranslation } from "react-i18next";

function AssetTableRowDropdown(props) {
  const { tokenName, connectWeb3, legacy, web3Global } = props;

  const { t } = useTranslation();
  const k = (key) => `Tokens.${tokenName}.${key}`;

  return (
    <div className="main-table__dropdown">
      <div className="offer-grid">
        <div className="offer-grid__head">
          {t("AssetTableRowDropdown.Whats it like")}
        </div>
        <div className="offer-grid__head">
          {t("AssetTableRowDropdown.Details")}
        </div>
        <div className="offer-grid__head">
          {t("AssetTableRowDropdown.Risks")}
        </div>

        <div className="offer-grid__cell">
          <Trans i18nKey={k("Short")} t={t} />
        </div>
        <div className="offer-grid__cell">
          <Trans i18nKey={k("Details")} t={t} />
        </div>
        <div className="offer-grid__cell">
          <Trans i18nKey={k("Benefits")} t={t} />
        </div>
      </div>

      <div className="offer-grid offer-grid--mobile">
        <div className="offer-grid__head offer-grid__head--top">41%</div>
        <div className="offer-grid__cell offer-grid__cell--top">
          {t("OfferRequest.APY")}
        </div>

        <div className="offer-grid__head offer-grid__head--top">$ 466 122</div>
        <div className="offer-grid__cell offer-grid__cell--top">
          {t("OfferRequest.TVL")}
        </div>

        <div className="offer-grid__head" style={{ marginTop: "3rem" }}>
          {t("AssetTableRowDropdown.Whats it like")}
        </div>
        <div className="offer-grid__cell">
          <Trans i18nKey={k("Short")} t={t} />
        </div>

        <div className="offer-grid__head">
          {t("AssetTableRowDropdown.Details")}
        </div>
        <div className="offer-grid__cell">
          <Trans i18nKey={k("Details")} t={t} />
        </div>

        <div className="offer-grid__head">
          {t("AssetTableRowDropdown.Risks")}
        </div>
        <div className="offer-grid__cell">
          <Trans i18nKey={k("Benefits")} t={t} />
        </div>
      </div>

      <div className="offer-request-wrapper">
        <div className="offer-request__title">
          {t("OfferRequest.Buy tokens")}
        </div>

        <div className="offer-request">
          {!legacy ? (
            <TokenRequestController
              initialToken={tokenName}
              initialCurrency={"usdt"}
              connectWeb3={connectWeb3}
              web3Global={web3Global}
              Component={TokenRequestEmbedded}
            />
          ) : (
            <OnChainValidation requestedToken={tokenName} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AssetTableRowDropdown;
