import React from "react";
import { tokenInfo } from "./data/tokens";

function OnChainValidation(props) {
  const { requestedToken } = props;

  return (
    <>
      <div
        className="desktop_only OnChainValidation"
        style={{ textAlign: "right" }}
      >
        <span>ONCHAIN VALIDATION:</span>

        {tokenInfo[requestedToken].vaults &&
          tokenInfo[requestedToken].vaults.map((vault, index) => (
            <a
              target="_blank"
              key={index}
              href={`https://debank.com/profile/${vault}`}
            >
              Wallet
              {tokenInfo[requestedToken].vaults.length === 1
                ? ""
                : `-${index + 1}`}
            </a>
          ))}
      </div>
    </>
  );
}

export default OnChainValidation;
