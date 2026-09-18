import { Outlet } from "react-router-dom";
import Sidebar from "./components/2.Sidebar/Sidebar";
import Header from "./components/1.Header/Header";

function DashboardLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* LEFT: Fixed Sidebar */}
      <Sidebar />

      {/* RIGHT: Header + Dynamic Body Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Top Header */}
        <Header />

        {/* Main Body: <Outlet /> injects Home.jsx based on the URL */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f4f7fe' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
