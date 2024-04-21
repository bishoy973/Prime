import { useTranslation } from "react-i18next";

import WS1 from "../../assets/images/workshop.png";

export default function Dynamicbalance() {
  const {t} = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 dynamicCustom mt-3 mb-2">
            <h2 className="mt-4 pt-3">{t("workshops.home.title")}</h2>
            <p>
             {t("workshops.home.P")}
            </p>
            <p>
            {t("workshops.home.P2")}
            </p>
          </div>

          <div className="col-md-6">
            <img src={WS1} className="w-100 dynamicCustom" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
