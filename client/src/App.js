import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Add from "./pages/Add.jsx";
import Car from "./pages/Car.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./style.scss";
const Layout = ()=>{
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
    );
  };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/car/:id",
        element:<Car/>
      },
      {
        path:"/add",
        element:<Add/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className = "app">
      <div className = "container">
        <RouterProvider router = {router}/>
      </div>
    </div>
    );
  }
  
    
  export default App;
