import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contactus from './Contactus/Contactus';
import Workshoplayout from './WorkshopLayout/Workshoplayout';
import Forming from './Forming/Forming';
import Dynamicbalance from './Components/DynamicBalancing/Dynamicbalance';
import Welding from './Components/Welding/Welding';
import Pressing from './Pressing/Pressing';
import Hydraulic from './Hydraulic/Hydraulic';
import Metal from './Components/Metal/Metal';
import Wire from './Wire/Wire';
import Workshop from './Components/Workshop/Workshop';

function App() {
 let routes =  createBrowserRouter([
  {path:"", element:<Layout/> , children:[{index:"true",element:<Home/>},
  {path:"aboutus" , element:<About/>},
  {path:"service" , element:<Service/>},
 {path:"contactus" , element:<Contactus/>},
 {path:"workshop" , element:<Workshop/>},
   {path:"home" , element:<Home/> , children:[
    {path:"forming", element:<Forming/>},
    {path:"dynamic", element:<Dynamicbalance/>},
    {path:"welding", element:<Welding/>},
    {path:"Pressing", element:<Pressing/>},
    {path:"Hydraulic", element:<Hydraulic/>},
    {path:"metal", element:<Metal/>},
    {path:"wire",element:<Wire/>}
    
  ]},
 


]},
  
 
     
 ])
  return (
    <>
    <RouterProvider router={routes}>
   <Home/>
   <About/>
    </RouterProvider>
    
    </>
);
}

export default App;
