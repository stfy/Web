import React from "react";
import TokenTableInfo from "./widgets/TokenTableInfo";
import { allTokens } from "./data/tokens";
import HeaderAccountBalance from "./HeaderAccountBalance";

function Account(props) {
  const {
    web3Global,
    address,
    connectWeb3,
    setGlobalTotal,
    globalTotal,
  } = props;

  return (
    <div className="page account PageAccount">
      <section className="section">
        <div className="section__header">
          <h1 className="title">My Account</h1>

          <HeaderAccountBalance globalTotal={globalTotal} />
        </div>

        <div className="section__content">
          {!address ? (
            <div className="buttons">
              <a className="button _light" href onClick={connectWeb3}>
                Connect wallet
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
