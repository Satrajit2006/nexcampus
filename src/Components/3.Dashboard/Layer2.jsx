import React from "react";
import styles from "./Layer2.module.css"

const timetable = [
  {
    time: "09:00",
    end: "10:00 AM",
    subject: "Data Structures",
    room: "Room 305, Block B",
    status: "Ongoing",
    color: "#19c37d",
  },
  {
    time: "10:15",
    end: "11:15 AM",
    subject: "Database Management Systems",
    room: "Room 201, Block A",
    status: "Upcoming",
    color: "#1877f2",
  },
  {
    time: "11:30",
    end: "12:30 PM",
    subject: "Software Engineering",
    room: "Room 402, Block C",
    status: "Upcoming",
    color: "#b0b7c3",
  },
  {
    time: "02:00",
    end: "03:00 PM",
    subject: "Computer Networks",
    room: "Room 301, Block B",
    status: "Upcoming",
    color: "#b0b7c3",
  },
];

const Layer2=()=>{
  return (
    <div className={styles.dashboard}>
      {/* Timetable */}
      <div className={styles["timetable-card"]}>
        <div className={styles["card-header"]}>
          <p>Today's Timetable</p>
          <a href="/">View Full Timetable</a>
        </div>

        {timetable.map((item, index) => (
          <div className={styles["timetable-item"]} key={index}>
            <div className={styles.time}>
              <h4>{item.time}</h4>
              <p>{item.end}</p>
            </div>

            <div
          className={styles.dot}
              style={{ backgroundColor: item.color }}
            ></div>

            <div className={styles.details}>
              <h4>{item.subject}</h4>
              <p>{item.room}</p>
            </div>

            <button
              className={
                item.status === "Ongoing"
                  ? "status ongoing"
                  : "status upcoming"
              }
            >
              {item.status}
            </button>
          </div>
        ))}
      </div>

     {/* Attendance */}
       <div className={styles["attendance-card"]}>
        <div className={styles["attendance-header"]}>
          <h3>Attendance Overview</h3>

          <select>
            <option>This Month</option>
          </select>
        </div>

        <div className={styles["attendance-content"]}>
          <div className={styles["progress-circle"]}>
            <div className={styles["inner-circle"]}>
              <h1>92%</h1>
              <p>Present</p>
            </div>
          </div>

          <div className={styles["attendance-info"]}>
            <div>
              <span className={styles.green}></span>
              <p>Present</p>
              <h6>23 Days</h6>
            </div>

            <div>
              <span className={styles.red}></span>
              <p>Absent</p>
              <h6>2 Days</h6>
            </div>

            <div>
              <span className={styles.gray}></span>
              <p>Total Days</p>
              <h6>25 Days</h6>
            </div>
          </div>
        </div>

        <button className={styles["attendance-btn"]}>
          Mark Attendance
        </button>
      </div>
    </div>
  );
}
export default Layer2;