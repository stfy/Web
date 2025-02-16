import React from "react";
import { tokenInfo, currencies, currencyInfo } from "./data/tokens";
import { exchanges, tokenExchanges } from "./data/exchanges";
import Select from "./Select";

function Deposit(props) {
  const { canPerformTokenRequest, performTokenRequest } = props;
  return (
    <td className="desktop_only">
      <a
        className={
          "button _full" + (canPerformTokenRequest ? "" : " _disabled")
        }
        href
        onClick={performTokenRequest}
      >
        Deposit
      </a>
    </td>
  );
}

function Withdraw(props) {
  const {
    withdrawEnabled,
    canPerformTokenWithdraw,
    performTokenWithdraw,
  } = props;
  return (
    <>
      {withdrawEnabled ? (
        <td className="desktop_only">
          <a
            className={
              "button _full" + (canPerformTokenWithdraw ? "" : " _disabled")
            }
            href
            onClick={performTokenWithdraw}
          >
            Withdraw
          </a>
        </td>
      ) : (
        <td />
      )}
    </>
  );
}

function TokenRequestEmbedded(props) {
  const {
    setRequestedToken,
    setOfferedToken,
    setRequestedAmount,
    setOfferedAmount,
    offeredToken,
    requestedAmount,
    offeredAmount,
    requestedToken,
    performTokenRequest,
    canPerformTokenRequest,
    performTokenWithdraw,
    canPerformTokenWithdraw,
    errorMessage,
    withdrawEnabled,
    smallSum,
  } = props;

  return (
    <>
      <div>
        <div>
          <label
            htmlFor={"receive-" + requestedToken}
            className="TokenRequestInputLabel"
          >
            Receive
          </label>

          <div className="TokenRequestInputSelect input-select ">
            <input
              id={"receive-" + requestedToken}
              className="input _token-request"
              type="text"
              required
              value={requestedAmount}
              onChange={(e) =>
                setRequestedAmount(Number.parseFloat(e.target.value))
              }
            />
            <Select
              value={requestedToken}
              setValue={setRequestedToken}
              options={[requestedToken]}
              valueDisplay={(token) => tokenInfo[token].symbol}
              valueImage={(_) => "logo"}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor={"for-" + requestedToken}
            className="TokenRequestInputLabel"
          >
            For
          </label>
          <div className="TokenRequestInputSelect input-select flex-grow">
            <input
              className="input _token-request"
              id={"for-" + requestedToken}
              type="text"
              required
              value={offeredAmount}
              onChange={(e) =>
                setOfferedAmount(Number.parseFloat(e.target.value))
              }
            />
            <Select
              value={offeredToken}
              setValue={setOfferedToken}
              options={currencies}
              valueDisplay={(currency) => currencyInfo[currency].symbol}
              valueImage={(currency) => currencyInfo[currency].image}
            />
          </div>
        </div>

        <a
          className={
            "TokenRequestInputButton button _full" +
            (canPerformTokenRequest ? "" : " _disabled")
          }
          href
          onClick={performTokenRequest}
        >
          Create request
        </a>
      </div>
      {/*{!smallSum && errorMessage && (*/}
      {/*  <tr className="desktop_only">*/}
      {/*    <td*/}
      {/*      colSpan={4}*/}
      {/*      className="error"*/}
      {/*      style={{ borderBottomWidth: 0, padding: 0 }}*/}
      {/*    >*/}
      {/*      <span>{errorMessage}</span>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*)}*/}
      {/*{smallSum && (*/}
      {/*  <tr className="desktop_only">*/}
      {/*    <td colSpan={2} style={{ borderBottomWidth: 0 }} />*/}
      {/*    <td*/}
      {/*      colSpan={2}*/}
      {/*      className="redirect"*/}
      {/*      style={{ borderBottomWidth: 0, padding: 0, textAlign: "left" }}*/}
      {/*    >*/}
      {/*      <span className="redirect">*/}
      {/*        Dear user,{" "}*/}
      {/*        <span className="redirect_error">*/}
      {/*          Token Request works for amounts over $3,000 USDT / USDC / DAI*/}
      {/*        </span>*/}
      {/*        <br />*/}
      {/*        For smaller amounts kindly proceed to Uniswap, Sushiswap or 1Inch*/}
      {/*      </span>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*)}*/}
      {/*{!smallSum && (*/}
      {/*  <tr>*/}
      {/*    <td colSpan={2} />*/}
      {/*    {withdrawEnabled ? (*/}
      {/*      <>*/}
      {/*        <Deposit*/}
      {/*          canPerformTokenRequest={canPerformTokenRequest}*/}
      {/*          performTokenRequest={performTokenRequest}*/}
      {/*        />*/}
      {/*        <Withdraw*/}
      {/*          withdrawEnabled={withdrawEnabled}*/}
      {/*          canPerformTokenWithdraw={canPerformTokenWithdraw}*/}
      {/*          performTokenWithdraw={performTokenWithdraw}*/}
      {/*        />*/}
      {/*      </>*/}
      {/*    ) : (*/}
      {/*      <>*/}
      {/*        <td />*/}
      {/*        <Deposit*/}
      {/*          canPerformTokenRequest={canPerformTokenRequest}*/}
      {/*          performTokenRequest={performTokenRequest}*/}
      {/*        />{" "}*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  </tr>*/}
      {/*)}*/}
      {/*{smallSum && (*/}
      {/*  <tr>*/}
      {/*    <td colSpan={2} />*/}
      {/*    <td colSpan={2}>*/}
      {/*      <div className="buttons_container">*/}
      {/*        {Object.keys(exchanges).map((exchange) => (*/}
      {/*          <a*/}
      {/*            target="_blank"*/}
      {/*            key={exchange}*/}
      {/*            className={*/}
      {/*              "button _medium" +*/}
      {/*              (canPerformTokenRequest ? "" : " _disabled")*/}
      {/*            }*/}
      {/*            href={tokenExchanges[requestedToken][exchange] || "#"}*/}
      {/*            onClick={performTokenRequest}*/}
      {/*          >*/}
      {/*            Buy on {exchanges[exchange]}*/}
      {/*          </a>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*)}*/}
    </>
  );
}

export default TokenRequestEmbedded;
