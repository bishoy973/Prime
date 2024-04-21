import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import Dynamicbalance from "./Components/DynamicBalancing/Dynamicbalance";
import Welding from "./Components/Welding/Welding";
import Metal from "./Components/Metal/Metal";
import Workshop from "./Components/Workshop/Workshop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contactus from "./pages/Contactus/Contactus";
import Forming from "./Components/Forming/Forming";
import Pressing from "./Components/Pressing/Pressing";
import Hydraulic from "./Components/Hydraulic/Hydraulic";
import Wire from "./Components/Wire/Wire";
import Projects from "./pages/Projects/Projects";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: "true", element: <Home /> },
        { path: "aboutus", element: <About /> },
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
        { path: "contactus", element: <Contactus /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}>
        <Home />
        <About />
      </RouterProvider>
    </>
  );
}

export default App;
