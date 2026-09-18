import styles from "./Attendance.module.css";

import {
  FaCalendarCheck,
  FaBookOpen,
  FaBullseye,
  FaTrophy
} from "react-icons/fa";

import StatCard from "./StatCard";
import AttendanceChart from "./AttendanceChart";
import DonutChart from "./DonutChart";
import Calendar from "./Calendar";
import AttendanceTable from "./AttendanceTable";

const Attendance = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topCards}>
        <StatCard
          icon={<FaCalendarCheck />}
          title="Overall Attendance"
          value="92%"
          subtitle="Present"
        />

        <StatCard
          icon={<FaBookOpen />}
          title="Total Classes"
          value="25"
          subtitle="Conducted"
        />

        <StatCard
          icon={<FaBullseye />}
          title="Attendance Goal"
          value="90%"
          subtitle="Your Goal"
        />

        <StatCard
          icon={<FaTrophy />}
          title="Current Streak"
          value="12"
          subtitle="Days"
        />
      </div>

      <div className={styles.middleSection}>
        <AttendanceChart />
        <DonutChart />
        <Calendar />
      </div>

      <AttendanceTable />
    </div>
  );
};

export default Attendance;