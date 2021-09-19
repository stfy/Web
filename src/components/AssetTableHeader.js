import React from "react";

class AssetTableHeader extends React.Component {
  render() {
    return (
      <div
        className="main-table__thead main-table__tr"
        data-class="AssetTableHeader"
      >
        <div className="main-table__th">Products</div>
        <div className="main-table__th">Annual Percentage Yield (APY)</div>
        <div className="main-table__th">Total Value Locked (TVL)</div>
        <div className="main-table__th" />
      </div>
    );
  }
}
export default AssetTableHeader;
