import React from "react";
import { withTranslation } from "react-i18next";

class AssetTableHeader extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <>
        <div
          className="main-table__thead main-table__tr"
          data-class="AssetTableHeader"
        >
          <div className="main-table__th">{t("index.Strategies")}</div>
          <div className="main-table__th">
            {t("index.Annual Percentage Yield (APY)")}
          </div>
          <div className="main-table__th">
            {t("index.Total Value Locked (TVL)")}
          </div>
          <div className="main-table__th" />
        </div>

        <div
          className={
            "main-table__thead main-table__thead--mobile main-table__tr"
          }
        >
          Strategy
        </div>
      </>
    );
  }
}
export default withTranslation()(AssetTableHeader);
