import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Dynamicbalance from './Components/DynamicBalancing/Dynamicbalance';
import Welding from './Components/Welding/Welding';
import Workshop from './Components/Workshop/Workshop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Contactus from './pages/Contactus/Contactus';
import Forming from './Components/Forming/Forming';
import Pressing from './Components/Pressing/Pressing';
import Hydraulic from './Components/Hydraulic/Hydraulic';
import Wire from './Components/Wire/Wire';
import Projects from './pages/Projects/Projects';
import Metalwork from './Components/MetalWork/Metalwork';

function App() {
 let routes =  createBrowserRouter([
  {path:"", element:<Layout/> , children:[{index:"true",element:<Home/>},
  {path:"aboutus" , element:<About/>},
  {path:"service" , element:<Service/>},
  {path:"workshop" , element:<Workshop/>},
  {path:"projects", element:<Projects/>},
  {path:"home", element:<Home/> , children:[
    {path:"forming", element:<Forming/>},
    {path:"dynamic", element:<Dynamicbalance/>},
    {path:"welding", element:<Welding/>},
    {path:"Pressing", element:<Pressing/>},
    {path:"Hydraulic", element:<Hydraulic/>},
    {path:"metal", element:<Metalwork/>},
    {path:"wire",element:<Wire/>}
    
  ]},
  {path:"contactus" , element:<Contactus/>}

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
