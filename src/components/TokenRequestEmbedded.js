import React from "react";
import { tokenInfo, currencies, currencyInfo } from "./data/tokens";
import { exchanges, tokenExchanges } from "./data/exchanges";
import Select from "./Select";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className={"TokenRequestBlock"}>
          <label
            htmlFor={"receive-" + requestedToken}
            className="TokenRequestInputLabel"
          >
            {t("OfferRequest.Receive")}
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
        <div className={"TokenRequestBlock"}>
          <label
            htmlFor={"for-" + requestedToken}
            className="TokenRequestInputLabel"
          >
            {t("OfferRequest.For")}
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

        {!smallSum && withdrawEnabled && (
          <a
            className={
              "TokenRequestInputButton TokenRequestInputButton--withdraw button _full" +
              (canPerformTokenWithdraw ? "" : " _disabled")
            }
            href
            onClick={performTokenWithdraw}
          >
            {t("OfferRequest.Withdraw")}
          </a>
        )}

        <a
          className={
            "TokenRequestInputButton button _full" +
            (canPerformTokenRequest ? "" : " _disabled")
          }
          href
          onClick={performTokenRequest}
        >
          {t("OfferRequest.Deposit")}
        </a>
      </div>

      {!smallSum && errorMessage && (
        <span className={"TokenRequestErrorMessage"}>{errorMessage}</span>
      )}

      {smallSum && (
        <div className={"SmallSum"}>
          <span className="redirect">
            {t("TokenRequestEmbedded.Dear user")},{" "}
            <span className="redirect_error">
              {t("TokenRequestEmbedded.Token Request works")}
            </span>
            <br />
            {t("TokenRequestEmbedded.For smaller")}
          </span>
        </div>
      )}
    </>
  );
}

export default TokenRequestEmbedded;
