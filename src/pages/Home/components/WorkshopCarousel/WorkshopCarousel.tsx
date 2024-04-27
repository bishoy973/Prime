import { useState } from "react";
import { useTranslation } from "react-i18next";

import WS1 from "../../../../assets/images/workshop.png";

enum Tabs {
  Forming = "Forming",
  DynamicBalance = "DynamicBalance",
  Welding = "Welding",
  Pressing = "Pressing",
  Hydraulic = "Hydraulic",
  Metal = "Metal",
  Wire = "Wire",
}

const workshops = {
  [Tabs.Forming]: {
    btn: "home.workshops.forming.btn",
    title: "Forming.home.title",
    P: "Forming.home.P",
    P2: "Forming.home.P2",
    img: WS1,
  },
  [Tabs.DynamicBalance]: {
    btn: "home.workshops.dynamicBalance.btn",
    title: "workshops.home.title",
    P: "workshops.home.P",
    P2: "workshops.home.P2",
    img: WS1,
  },
  [Tabs.Welding]: {
    btn: "home.workshops.welding.btn",
    title: "Welding.home.title",
    P: "Welding.home.P",
    P2: "Welding.home.P2",
    img: WS1,
  },
  [Tabs.Pressing]: {
    btn: "home.workshops.pressing.btn",
    title: "Pressing.home.title",
    P: "Pressing.home.P",
    P2: "Pressing.home.P2",
    img: WS1,
  },
  [Tabs.Hydraulic]: {
    btn: "home.workshops.hydraulic.btn",
    title: "Hydraulic.home.title",
    P: "Hydraulic.home.P",
    P2: "Hydraulic.home.P2",
    img: WS1,
  },
  [Tabs.Metal]: {
    btn: "home.workshops.metal.btn",
    title: "Metal.home.title",
    P: "Metal.home.P",
    P2: "Metal.home.P2",
    img: WS1,
  },
  [Tabs.Wire]: {
    btn: "home.workshops.wire.btn",
    title: "Wire.home.title",
    P: "Wire.home.P",
    P2: "Wire.home.P2",
    img: WS1,
  },
};

const WorkshopDetails = ({ workshop }: { workshop: Tabs }) => {
  const { t } = useTranslation();

  const details = workshops[workshop];

  return (
    <div className="row mt-4">
      <div className="col-md-5 dynamicCustom p-4 p-lg-5 text-white">
        <h2 className="mt-lg-5">{t(details.title)}</h2>
        <p className="mt-4 mt-lg-5">{t(details.P)}</p>
        <p className="mt-4 mt-lg-5">{t(details.P2)}</p>
      </div>

      <div className="col-md-7">
        <img src={WS1} className="w-100 dynamicCustom" alt="" />
      </div>
    </div>
  );
};

const WorkshopsTabs = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(Tabs.Forming);

  return (
    <div className="container">
      <nav className="nav flex-column flex-sm-row mb-5">
        {Object.values(Tabs).map((tab) => (
          <a
            key={tab}
            style={{
              cursor: "pointer",
            }}
            className={`flex-sm-fill text-sm-center nav-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {t(workshops[tab].btn)}
          </a>
        ))}
      </nav>

      <WorkshopDetails workshop={activeTab} />
    </div>
  );
};

export default WorkshopsTabs;
