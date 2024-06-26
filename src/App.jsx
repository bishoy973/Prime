import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Service from "./pages/Service/Service";
import Workshop from "./pages/Workshop/Workshop";
import Layout from "./Components/Layout/Layout";
import ContactUsPage from './pages/Contactus/ContactusPage';

function App() {

  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, exact: true, element: <Home /> },
        { path: "about-us", element: <About /> },
        { path: "service", element: <Service /> },
        { path: "workshop", element: <Workshop /> },
        { path: "projects", element: <Projects /> },
        { path: "contactus", element: <ContactUsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
  
}

export default App;
