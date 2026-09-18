import styles from "./OverviewCards.module.css";
import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineClock,
} from "react-icons/hi";

export default function OverviewCards() {
  return (
    <div className={styles.card}>
      <h3>Timetable Overview</h3>

      <div className={styles.grid}>
        <div className={styles.green}>
          <HiOutlineCalendar />
          <h2>25</h2>
          <p>Total Classes</p>
        </div>

        <div className={styles.green2}>
          <HiOutlineCheckCircle />
          <h2>18</h2>
          <p>Completed</p>
        </div>

        <div className={styles.blue}>
          <HiOutlineClock />
          <h2>09:00</h2>
          <p>Next Class</p>
        </div>

        <div className={styles.purple}>
          <HiOutlineClock />
          <h2>28</h2>
          <p>Total Hours</p>
        </div>
      </div>
    </div>
  );
}