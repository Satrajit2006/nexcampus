import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/3.Dashboard/Home.jsx";
import Classes from "./Components/4.MyClasses/Classes.jsx";
import Attendance from "./Components/5.Attendence/Attendence.jsx";
import TimetablePage from "./Components/6.TimetablePage/TimetablePage.jsx";
import Grades from "./Components/7.Grades/Grades.jsx";
import NoticeBoard from "./Components/8.NoticeBoard/NoticeBoard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/classes", element: <Classes /> },
      {path:"/attendance",element:<Attendance/>},
      {path:"/timetable",element:<TimetablePage/>},
      {path:"/grades",element:<Grades/>},
      {path:"/notices",element:<NoticeBoard/>},
    ],
  },
  {},
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
