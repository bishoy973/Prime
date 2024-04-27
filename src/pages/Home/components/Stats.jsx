const stats = [
  {
    title: "Employees",
    count: 100,
    iconClassName: "fa-users",
  },
  {
    title: "Areas Service Center",
    count: 10,
    iconClassName: "fa-map-marker-alt",
  },
  {
    title: "European Agents",
    count: 12,
    iconClassName: "fa-users",
  },
];

const Stat = ({ title, count, iconClassName }) => {
  return (
    <div className="d-flex align-self-center align-items-center">
      <div className="px-3 align-content-end">
        <p className="mt-4 mb-0 fw-bold fs-3 text-warning text-center">{count}</p>
        <p className="mb-4 mt-0 pt-0 text-white small">{title}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <i class={`fa-solid ${iconClassName} fs-1 text-white`} />
      </div>
    </div>
  );
};

const StatsList = () => {
  return (
    <div className="container-fluid counter-section bg-danger">
      <div className="d-flex justify-content-around flex-column flex-lg-row">
        {stats.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsList;
