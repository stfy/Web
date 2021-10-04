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
            <div className="table-wrapper">
              <TokenTableInfo
                tokens={allTokens}
                walletAddress={address}
                web3={web3Global}
                setGlobalTotal={setGlobalTotal}
                profitAccumulator={() => {}}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Account;
