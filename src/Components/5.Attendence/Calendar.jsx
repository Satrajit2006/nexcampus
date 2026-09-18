import styles from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.card}>
      <h3>Calendar</h3>

      <div className={styles.date}>
        <span>10</span>
      </div>

      <p>May 2024</p>
    </div>
  );
};

export default Calendar;