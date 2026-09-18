import styles from "./DonutChart.module.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Present", value: 23 },
  { name: "Absent", value: 2 }
];

const COLORS = ["#13c7b5", "#ff5f5f"];

const DonutChart = () => {
  return (
    <div className={styles.card}>
      <h3>Attendance Distribution</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={85}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;