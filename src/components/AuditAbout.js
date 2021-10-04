import React from "react";
import { withTranslation } from "react-i18next";

class AuditAbout extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div className="section SecurityAudit">
        <div className="section__content">
          <div className="section__header">
            <h2 className="title">{t("index.Security Audit")}</h2>
          </div>

          <div className="information">
            <div className="information__item">
              <div className="information__title">
                <b>{t("index.Afford Capital DAO")}</b> {t("index.is a dec")}
              </div>
              <div className="information__title">
                {t("index.Aragon Smart Contract Audits")}
              </div>
              <div className="information__text">{t("index.A number of")}</div>
              <div className="information__text">
                {t("index.Details:")}&nbsp;
                <a
                  className="link-color"
                  href="https://wiki.aragon.org/association/security/audits/audit_whg01_report"
                >
                  Aragon Audit Report
                </a>
              </div>
            </div>
            <div className="information__item">
              <div className="information__title">White Hat Group</div>
              <div className="information__title">Consensys Diligence</div>
              <div className="information__text">{t("index.As one of")}</div>
              <div className="information__title">Authio</div>
              <div className="information__text">{t("index.Authio is")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(AuditAbout);
