import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AssetTableRowDropdown from "./AssetTableRowDropdown";
import { tokenInfo } from "./data/tokens";
import APY from "./widgets/APY";
import APYLegacy from "./widgets/legacy/APYLegacy";
import TokenPriceLegacy from "./widgets/legacy/TokenPriceLegacy";
import TokenPrice from "./widgets/TokenPrice";
import { useTranslation } from "react-i18next";

function AssetTableRow(props) {
  const {
    tokenName,
    connectWeb3,
    open,
    onClick,
    legacy,
    even,
    web3Global,
  } = props;

  const { address, tableName } = tokenInfo[tokenName];

  const { t } = useTranslation();

  const myRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (
      myRef &&
      location.hash &&
      location.hash.endsWith("#afford") &&
      tokenName === "afford"
    ) {
      setTimeout(() => {
        if (myRef.current) {
          myRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }
      }, 100);
    }
  }, [location, myRef, myRef.current]);

  return (
    <>
      <div
        className={
          "main-table__tr main-table__asset-row activeToggle" +
          (open ? " active" : "") +
          (even ? " even" : "")
        }
        onClick={onClick}
      >
        <div className="main-table__td">
          <div className="main-table__td-row">
            <span>{t(`token.${tableName}`)}</span>
          </div>
        </div>
        <div className="main-table__td desktop_only">
          {legacy ? (
            <APYLegacy tokenAddress={address} decimals={0} />
          ) : (
            <APY tokenAddress={address} decimals={0} />
          )}
        </div>
        <div className="main-table__td desktop_only">
          {legacy ? (
            <TokenPriceLegacy tokenAddress={address} />
          ) : (
            <TokenPrice tokenAddress={address} />
          )}
        </div>
        <div className="main-table__td">
          <div className="main-table__dropdown-btn" ref={myRef}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.585 7.70752L6 3.12254L1.41502 7.70752L0 6.29255L6 0.292551L12 6.29255L10.585 7.70752Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <AssetTableRowDropdown
        legacy={legacy}
        connectWeb3={connectWeb3}
        tokenName={tokenName}
        web3Global={web3Global}
      />
    </>
  );
}

export default React.memo(AssetTableRow);
