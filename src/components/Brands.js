import React from "react";
import { withTranslation } from "react-i18next";

class Brands extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <section className="section SectionBrands">
        <div className="section__header">
          <h2 className="title">{t("index.Dont Trust - Verify")}</h2>
        </div>

        <div className="section__hint">
          {t("index.We are using these audited protocols")}
        </div>

        <div className="brands">
          <div className="brands__grid">
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand1.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand2.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand3.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand4.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand5.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand6.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand7.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand8.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand9.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand10.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand11.png"
                title
                alt
              />
            </div>
            <div className="brands__item">
              <img
                className="brands__item-img"
                src="img/brand12.png"
                title
                alt
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Brands);
