import React from "react";
import { texts } from "./data/descriptions";
import OnChainValidation from "./OnChainValidation";
import TokenRequestController from "./TokenRequestController";
import TokenRequestEmbedded from "./TokenRequestEmbedded";
import { useTranslation } from "react-i18next";

function AssetTableRowDropdown(props) {
  const { tokenName, connectWeb3, legacy, web3Global } = props;

  const { t } = useTranslation();

  return (
    <div className="main-table__dropdown">
      <div className="offer-grid">
        <div className="offer-grid__head">What's it like</div>
        <div className="offer-grid__head">Details</div>
        <div className="offer-grid__head">Risks</div>

        <div className="offer-grid__cell">{texts[tokenName].shortDesc}</div>
        <div className="offer-grid__cell">{texts[tokenName].fullDesc}</div>
        <div className="offer-grid__cell">{texts[tokenName].benefits}</div>
      </div>

      <div className="offer-grid offer-grid--mobile">
        <div className="offer-grid__head offer-grid__head--top">41%</div>
        <div className="offer-grid__cell offer-grid__cell--top">
          Annual Percentage Yield
        </div>

        <div className="offer-grid__head offer-grid__head--top">$ 466 122</div>
        <div className="offer-grid__cell offer-grid__cell--top">
          Total Value Locked (TVL)
        </div>

        <div className="offer-grid__head" style={{ marginTop: "3rem" }}>
          What's it like
        </div>
        <div className="offer-grid__cell">{texts[tokenName].shortDesc}</div>

        <div className="offer-grid__head">Details</div>
        <div className="offer-grid__cell">{texts[tokenName].fullDesc}</div>

        <div className="offer-grid__head">Risks</div>
        <div className="offer-grid__cell">{texts[tokenName].benefits}</div>
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
