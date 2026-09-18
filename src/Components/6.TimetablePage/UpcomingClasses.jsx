import styles from "./UpcomingClasses.module.css";

export default function UpcomingClasses() {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3>Upcoming Classes</h3>
        <span>View All</span>
      </div>

      <div className={styles.item}>
        <div className={styles.dot}></div>
        <div>
          <h4>Database Management Systems</h4>
          <p>CSE302 • Room 201</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.dotPurple}></div>
        <div>
          <h4>Software Engineering</h4>
          <p>CSE303 • Room 402</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.dotOrange}></div>
        <div>
          <h4>Discrete Mathematics</h4>
          <p>MATH201 • Room 203</p>
        </div>
      </div>
    </div>
  );
}