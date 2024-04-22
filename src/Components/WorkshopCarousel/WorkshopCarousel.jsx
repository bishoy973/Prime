import WS1 from "../../assets/images/workshop.png";

const WorkshopCarousel = ({ workshops }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 dynamicCustom mt-3 mb-2">
              <h2 className="mt-4 pt-3">{t("Forming.home.title")}</h2>
              <p>{t("Forming.home.P")}</p>
              <p>{t("Forming.home.P2")}</p>
            </div>

            <div className="col-md-6">
              <img src={WS1} className="w-100 dynamicCustom" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const workshops = {
  Forming: {
    title: "Forming.home.title",
    P: "Forming.home.P",
    P2: "Forming.home.P2",
    img: WS1,
  },
  Dynamicbalance: {
    title: "workshops.home.title",
    P: "workshops.home.P",
    P2: "workshops.home.P2",
    img: WS1,
  },
  Welding: {
    title: "Welding.home.title",
    P: "Welding.home.P",
    P2: "Welding.home.P2",
    img: WS1,
  },
  Pressing: {
    title: "Pressing.home.title",
    P: "Pressing.home.P",
    P2: "Pressing.home.P2",
    img: WS1,
  },
  Hydraulic: {
    title: "Hydraulic.home.title",
    P: "Hydraulic.home.P",
    P2: "Hydraulic.home.P2",
    img: WS1,
  },
  Metal: {
    title: "Metal.home.title",
    P: "Metal.home.P",
    P2: "Metal.home.P2",
    img: WS1,
  },
  Wire: {
    title: "Wire.home.title",
    P: "Wire.home.P",
    P2: "Wire.home.P2",
    img: WS1,
  },
};

const WorkshopDetails = ({ workshop }) => {};
