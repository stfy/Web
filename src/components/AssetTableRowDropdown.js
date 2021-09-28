import React from "react";
import { texts } from "./data/descriptions";
import OnChainValidation from "./OnChainValidation";
import TokenRequestController from "./TokenRequestController";
import TokenRequestEmbedded from "./TokenRequestEmbedded";

function AssetTableRowDropdown(props) {
  const { tokenName, connectWeb3, legacy, web3Global } = props;

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
        <div className="offer-grid__head">What's it like</div>
        <div className="offer-grid__cell">{texts[tokenName].shortDesc}</div>

        <div className="offer-grid__head">Details</div>
        <div className="offer-grid__cell">{texts[tokenName].fullDesc}</div>

        <div className="offer-grid__head">Risks</div>
        <div className="offer-grid__cell">{texts[tokenName].benefits}</div>
      </div>

      <div className="offer-request-wrapper">
        <div className="offer-request__title">Buy tokens</div>

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
