import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contactus from "./pages/Contactus/Contactus";

import Workshoplayout from "./WorkshopLayout/Workshoplayout";
import Forming from "./Components/Forming/Forming";
import Dynamicbalance from "./Components/DynamicBalancing/Dynamicbalance";
import Welding from "./Components/Welding/Welding";
import Pressing from "./Components/Pressing/Pressing";
import Hydraulic from "./Components/Hydraulic/Hydraulic";
import Metal from "./Components/Metal/Metal";
import Wire from "./Components/Wire/Wire";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about-us", element: <About /> },
        { path: "service", element: <Service /> },
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
