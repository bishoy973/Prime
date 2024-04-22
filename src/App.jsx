import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import About from "./pages/About/About";
import Contactus from "./pages/Contactus/Contactus";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Service from "./pages/Service/Service";

import Dynamicbalance from "./Components/DynamicBalancing/Dynamicbalance";
import Forming from "./Components/Forming/Forming";
import Hydraulic from "./Components/Hydraulic/Hydraulic";
import Layout from "./Components/Layout/Layout";
import Metal from "./Components/MetalWork/Metalwork";
import Pressing from "./Components/Pressing/Pressing";
import Welding from "./Components/Welding/Welding";
import Wire from "./Components/Wire/Wire";
import Workshop from "./Components/Workshop/Workshop";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <About /> },
        { path: "service", element: <Service /> },
        { path: "workshop", element: <Workshop /> },
        { path: "projects", element: <Projects /> },
        {
          path: "home",
          element: <Home />,
          children: [
            { path: "forming", element: <Forming /> },
            { path: "dynamic", element: <Dynamicbalance /> },
            { path: "welding", element: <Welding /> },
            { path: "Pressing", element: <Pressing /> },
            { path: "Hydraulic", element: <Hydraulic /> },
            { path: "metal", element: <Metal /> },
            { path: "wire", element: <Wire /> },
          ],
        },
        { path: "contact-us", element: <Contactus /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
