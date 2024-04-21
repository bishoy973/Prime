import React from "react";

import WS1 from "../../assets/images/workshop.png";
import { useTranslation } from "react-i18next";

export default function Hydraulic() {
  const {t} = useTranslation();
  return (
  
    <>
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 dynamicCustom mt-3 mb-2">
              <h2 className="mt-4 pt-3">{t("Hydraulic.home.title")}</h2>
              <p>
             {t("Hydraulic.home.P")}
              </p>
              <p>
              {t("Hydraulic.home.P2")}
              </p>
            </div>

            <div className="col-md-6">
              <img src={WS1} className="w-100 dynamicCustom" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
