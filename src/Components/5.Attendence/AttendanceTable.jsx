import styles from "./AttendanceTable.module.css";

const AttendanceTable = () => {
  const subjects = [
    {
      name: "Data Structures",
      total: 8,
      present: 8,
      absent: 0,
      attendance: "100%"
    },
    {
      name: "DBMS",
      total: 6,
      present: 5,
      absent: 1,
      attendance: "83%"
    }
  ];

  return (
    <div className={styles.card}>
      <h3>Subject Wise Attendance</h3>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Total</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.total}</td>
              <td>{item.present}</td>
              <td>{item.absent}</td>
              <td>{item.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;