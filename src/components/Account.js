import React from "react";
import TokenTableInfo from "./widgets/TokenTableInfo";
import { allTokens } from "./data/tokens";
import HeaderAccountBalance from "./HeaderAccountBalance";
import { useTranslation } from "react-i18next";

function Account(props) {
  const {
    web3Global,
    address,
    connectWeb3,
    setGlobalTotal,
    globalTotal,
  } = props;

  const { t } = useTranslation();
  return (
    <div className="page account PageAccount">
      <section className="section">
        <div className="section__header">
          <h1 className="title">{t("MyAccount.My Account")}</h1>

          <HeaderAccountBalance globalTotal={globalTotal} />
        </div>
        <div className="section__content">
          {!address ? (
            <div className="buttons">
              <a className="button _light" href onClick={connectWeb3}>
                {t("MyAccount.Connect wallet")}
              </a>
            </div>
          ) : (
            <>
              <div className="table-wrapper">
                <TokenTableInfo
                  tokens={allTokens}
                  walletAddress={address}
                  web3={web3Global}
                  setGlobalTotal={setGlobalTotal}
                  profitAccumulator={() => {}}
                />
              </div>

              <div className={"account-table__info"}>
                <div>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="rotate(90 11.5 11.5)"
                      fill="#FBD039"
                    />
                    <path
                      d="M14 7.88484L10.2885 11.4L14 14.9152L12.8546 16L7.99769 11.4L12.8546 6.8L14 7.88484Z"
                      fill="#717171"
                    />
                  </svg>
                </div>

                <span className={"account-table__info-text"}>
                  {t("MyAccount.TableInfo")}
                </span>

                <div>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11.5"
                      cy="11.5"
                      r="11.5"
                      transform="rotate(-90 11.5 11.5)"
                      fill="#FBD039"
                    />
                    <path
                      d="M9 15.1152L12.7115 11.6L9 8.08485L10.1454 7L15.0023 11.6L10.1454 16.2L9 15.1152Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Account;
