
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar/>
        <Home />
      </div>
  
    }
    ,
    {
      path:'/about',
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:'/dashboard',
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>
    }
  ]
);

function App() {


  return (
    <>
     <RouterProvider router={router}/>
     {/* <Navbar/> */}
    </>
  )
}

export default App
