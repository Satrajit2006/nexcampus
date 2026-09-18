import styles from "./GradeTable.module.css";

export default function GradeTable({
  subjects,
}) {
  return (
    <div className={styles.wrapper}>
      <h4>Subject Wise Performance</h4>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Remark</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.credits}</td>
              <td>{item.grade}</td>
              <td>{item.points}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}