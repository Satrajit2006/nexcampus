import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import {
  LuLayoutDashboard,
  LuBookOpen,
  LuClipboardCheck,
  LuCalendarDays,
  LuFileCheck,
  LuFileText,
  LuBadgeCheck,
  LuLibrary,
  LuBriefcase,
  LuMessageSquare,
  LuBell,
  LuUser,
  LuSettings,
} from "react-icons/lu";

const menuItems = [
  { name: "Dashboard", icon: <LuLayoutDashboard />, path: "/" },
  { name: "My Classes", icon: <LuBookOpen />, path: "/classes" },
  { name: "Attendance", icon: <LuClipboardCheck />, path: "/attendance" },
  { name: "Timetable", icon: <LuCalendarDays />, path: "/timetable" },
  { name: "Assignments", icon: <LuFileCheck />, path: "/assignments" },
  { name: "Exams", icon: <LuFileText />, path: "/exams" },
  { name: "Grades", icon: <LuBadgeCheck />, path: "/grades" },
  { name: "Library", icon: <LuLibrary />, path: "/library" },
  { name: "Placements", icon: <LuBriefcase />, path: "/placements" },
  { name: "Messages", icon: <LuMessageSquare />, path: "/messages" },
  { name: "Notices", icon: <LuBell />, path: "/notices" },
  { name: "Profile", icon: <LuUser />, path: "/profile" },
  { name: "Settings", icon: <LuSettings />, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>N</div>
        <h2>NexCampus</h2>
      </div>

      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.menuItem} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
