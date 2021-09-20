import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { legacyTokens, tokens } from "./data/tokens";
import AssetTableRow from "./AssetTableRow";
import AssetTableHeader from "./AssetTableHeader";

function AssetTable(props) {
  const { connectWeb3 } = props;

  const [open, setOpen] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.hash && location.hash.endsWith("#flex")) {
      setOpen("flex");
    }
  }, [location]);

  return (
    <div
      className="section main-table"
      style={{ paddingTop: 0, marginTop: "-10rem" }}
    >
      <AssetTableHeader />

      <div className="main-table__asset_wrapper">
        {tokens.map((token, n) => (
          <AssetTableRow
            even={n % 2 === 0}
            open={open === token}
            onClick={() => {
              if (open === token) {
                setOpen(null);
              } else {
                setOpen(token);
              }
            }}
            key={token}
            tokenName={token}
            connectWeb3={connectWeb3}
          />
        ))}

        {legacyTokens.map((token, n) => (
          <>
            <AssetTableRow
              even={n % 2 === 0}
              legacy={true}
              open={open === token}
              onClick={() => {
                if (open === token) {
                  setOpen(null);
                } else {
                  setOpen(token);
                }
              }}
              key={token}
              tokenName={token}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default AssetTable;
