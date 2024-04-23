import { useTranslation } from "react-i18next";

import img1 from "../../../assets/images/about_1.png";
import img2 from "../../../assets/images/about-2.png";
import img3 from "../../../assets/images/about-3.png";

const ProjectsOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="container projects-section">
      <div className="d-flex justify-content-between">
        <div>
          <p className="text-warning">{t("ourProject.hero.title")}</p>
          <h2>{t("ourProject.hero.title.P1")}</h2>
          <h2>{t("ourProject.hero.title.P2")}</h2>
        </div>

        <p className="customProjects text-info fw-bolder" onClick={() => nav("/projects")}>
          <span className="pe-1">{t("ourProject.hero.title.btn")}</span> <i class="fa-solid fa-arrow-right" />
        </p>
      </div>

      <ProjectsList />
    </div>
  );
};

export default ProjectsOverview;

const ProjectsList = () => {
  const { t } = useTranslation();

  return (
    <div className="card-group justify-content-center mt-5">
      {projectsList.map(({ img, title, text }) => (
        <div className="card project-overview">
          <div
            className="img-bg"
            style={{
              backgroundImage: `url(${img})`,
            }}
          />

          <div class="card-body">
            <h5 class="card-title text-primary">{t(title)}</h5>
            <p className="card-text">{t(text)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const projectsList = [
  {
    img: img2,
    title: "ourProject.overview.pOne.title",
    text: "ourProject.overview.pOne.text",
  },
  {
    img: img1,
    title: "ourProject.overview.pTwo.title",
    text: "ourProject.overview.pTwo.text",
  },
  {
    img: img3,
    title: "ourProject.overview.pThree.title",
    text: "ourProject.overview.pThree.text",
  },
];
