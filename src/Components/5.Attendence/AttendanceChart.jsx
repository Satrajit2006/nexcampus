import styles from "./AttendanceChart.module.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { day: "Apr 10", attendance: 55 },
  { day: "Apr 15", attendance: 70 },
  { day: "Apr 20", attendance: 60 },
  { day: "Apr 25", attendance: 80 },
  { day: "Apr 30", attendance: 90 },
  { day: "May 05", attendance: 95 },
  { day: "May 10", attendance: 88 }
];

const AttendanceChart = () => {
  return (
    <div className={styles.card}>
      <h3>Attendance Trend</h3>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="attendance"
            stroke="#13c7b5"
            fill="#13c7b520"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;