import { useTranslation } from "react-i18next";

import serviceIcon1 from "../../../assets/images/ServiceIcon1.svg";
import serviceIcon2 from "../../../assets/images/serviceIcon2.svg";
import serviceIcon3 from "../../../assets/images/serviceIcon3.svg";
import serviceIcon4 from "../../../assets/images/serviceIcon4.svg";
import serviceIcon5 from "../../../assets/images/serviceIcon5.svg";

const services = [
  {
    title: "OurService.hero.card1",
    icon: serviceIcon1,
  },
  {
    title: "OurService.hero.card2",
    icon: serviceIcon2,
  },
  {
    title: "OurService.hero.card3",
    icon: serviceIcon3,
  },
  {
    title: "OurService.hero.card4",
    icon: serviceIcon4,
  },
  {
    title: "OurService.hero.card5",
    icon: serviceIcon5,
  },
  {
    title: "OurService.hero.card6",
  },
];

export const OurServices = () => {
  return (
    <div
      className="row justify-content-center"
      style={{
        gap: "1rem",
      }}
    >
      {services.map((service: any, index) => (
        <ServiceBox key={index} title={service.title} icon={service.icon} />
      ))}
    </div>
  );
};

const ServiceBox = ({ title, icon }: any) => {
  const { t } = useTranslation();

  return (
    <div className="col-12 col-md-6 col-lg-4 box">
      <div className="h-50 mx-auto d-flex align-items-end justify-content-center">
        <img src={icon} width={"35px"} height={"35px"} alt="" />
      </div>
      <div className="pt-3 text-center  fw-bolder">{t(title)}</div>
    </div>
  );
};
