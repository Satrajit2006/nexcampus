import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import DashboardLayout from './dashboardlayout';
import Home from './components/student dashboard/Home'; 
import './App.css';

function App() {
  return (
    <Routes>
      {/*  Login Route */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>{/*  dashboard Route */}
        <Route index element={<Home />} />
      </Route>
      {/*fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;