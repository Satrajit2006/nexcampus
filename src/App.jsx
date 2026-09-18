import Sidebar from "./Components/2.Sidebar/Sidebar";
import Header from "./Components/1.Header/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        <Sidebar></Sidebar>
        <div className="content">
          <Header />         
         <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App; 
