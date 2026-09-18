import styles from "./Calender.module.css";

const Calendar = () => {
  
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dates = [
    31, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 1, 2, 3, 4
  ];

  return (
    <div className={styles.calendar}>
      <div className={styles["calendar-header"]}>
        <button>&lt;</button>
        <h3>April 2024</h3>
        <button>&gt;</button>
      </div>

      <div className={styles.weekdays}>
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className={styles.dates}>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`${styles.date} ${index === 24 ? styles.active : ""
              } ${index < 1 || index > 30 ? styles.inactive : ""
              }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendar;