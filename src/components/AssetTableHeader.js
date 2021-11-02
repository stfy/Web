import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";

class AssetTableHeader extends React.Component {
  ref = React.createRef();
  mobileRef = React.createRef();

  scrollTo = () => {
    this.ref.current.scrollIntoView(true);
    this.mobileRef.current.scrollIntoView(true);
  };

  componentDidMount() {
    const location = this.props.location;

    if (location.hash !== "#strategies") {
      return;
    }

    this.scrollTo();
  }

  componentDidUpdate() {
    const location = this.props.location;

    if (location.hash !== "#strategies") {
      return;
    }

    this.scrollTo();
  }

  render() {
    const { t } = this.props;

    return (
      <>
        <div
          id={"strategies"}
          ref={this.ref}
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
          id={"strategies"}
          ref={this.mobileRef}
          className={
            "main-table__thead main-table__thead--mobile main-table__tr"
          }
        >
          {t("index.Strategies")}
        </div>
      </>
    );
  }
}
export default withRouter(withTranslation()(AssetTableHeader));
