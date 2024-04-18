import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Service from './Components/Service/Service';
import Workshoplayout from './WorkshopLayout/Workshoplayout';
import Dynamicbalance from './Components/DynamicBalancing/Dynamicbalance';
import Welding from './Components/Welding/Welding';
import Metal from './Components/Metal/Metal';
import Home from './Components/Home/Home';
import Contactus from './pages/Contactus/Contactus';
import Forming from './Components/Forming/Forming';
import About from './pages/About/About';
import Pressing from './Components/Pressing/Pressing';
import Hydraulic from './Components/Hydraulic/Hydraulic';
import Wire from './Components/Wire/Wire';

function App() {
 let routes =  createBrowserRouter([
  {path:"", element:<Layout/> , children:[{index:"true",element:<Home/>},
  {path:"aboutus" , element:<About/>},
  {path:"service" , element:<Service/>},
  {path:"home" , element:<Home/> , children:[
    {path:"forming", element:<Forming/>},
    {path:"dynamic", element:<Dynamicbalance/>},
    {path:"welding", element:<Welding/>},
    {path:"Pressing", element:<Pressing/>},
    {path:"Hydraulic", element:<Hydraulic/>},
    {path:"metal", element:<Metal/>},
    {path:"wire",element:<Wire/>}
    
  ]},
  {path:"contactus" , element:<Contactus/>}

]},
  
 
     
 ])
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
