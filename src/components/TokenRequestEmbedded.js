import React from "react";
import { tokenInfo, currencies, currencyInfo } from "./data/tokens";
import Select from "./Select";

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
    errorMessage,
  } = props;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="TokenRequestInputSelect input-select ">
          <input
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
        <div className="TokenRequestInputSelect input-select flex-grow">
          <input
            className="input _token-request"
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

        <a
          className={
            "button _full" + (canPerformTokenRequest ? "" : " _disabled")
          }
          href
          onClick={performTokenRequest}
        >
          Create request
        </a>

        {errorMessage && (
          <tr className="desktop_only">
            <td
              colSpan={4}
              className="error"
              style={{ borderBottomWidth: 0, padding: 0 }}
            >
              <span>{errorMessage && errorMessage.toUpperCase()}</span>
            </td>
          </tr>
        )}
      </div>
    </>
  );
}

export default TokenRequestEmbedded;
