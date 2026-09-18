import styles from "./TimetablePage.module.css";
import Timetable from "./Timetable";
import UpcomingClasses from "./UpcomingClasses";
import OverviewCards from "./OverviewCards";
import QuickLinks from "./QuickLinks";

export default function TimetablePage() {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div>
            <h1>Timetable</h1>
            <p>View your class schedule and never miss a class.</p>
          </div>

          <div className={styles.actions}>
            <button>
              <span></span>
              <h1>6 May - 12 May 2024</h1></button>
            <button>Today</button>
          </div>
        </div>

        <Timetable />
      </div>

      <div className={styles.right}>
        {/* <UpcomingClasses /> */}
        <OverviewCards />
        <QuickLinks />
      </div>
    </div>
  );
}