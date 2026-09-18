import styles from "./Timetable.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

const classes = [
  {
    id: 1,
    start: "08:00 AM",
    end: "09:00 AM",
    subject: "Data Structures",
    code: "CSE301",
    teacher: "Prof. Rahul Sharma",
    room: "Room 305, Block B",
    color: "ds",
  },
  {
    id: 2,
    start: "09:00 AM",
    end: "10:00 AM",
    subject: "Database Management Systems",
    code: "CSE302",
    teacher: "Prof. Neha Verma",
    room: "Room 201, Block A",
    color: "dbms",
  },
  {
    id: 3,
    start: "10:15 AM",
    end: "11:15 AM",
    subject: "Software Engineering",
    code: "CSE303",
    teacher: "Prof. Amit Kumar",
    room: "Room 402, Block C",
    color: "se",
  },
  {
    id: 4,
    start: "11:15 AM",
    end: "12:15 PM",
    subject: "Discrete Mathematics",
    code: "MATH201",
    teacher: "Prof. Priya Singh",
    room: "Room 203, Block A",
    color: "dm",
  },
  {
    id: 5,
    start: "01:30 PM",
    end: "02:30 PM",
    subject: "Computer Networks",
    code: "CSE304",
    teacher: "Prof. Sandeep Jain",
    room: "Room 301, Block B",
    color: "cn",
  },
  {
    id: 6,
    start: "02:30 PM",
    end: "03:30 PM",
    subject: "Object Oriented Programming",
    code: "CSE305",
    teacher: "Prof. Karan Mehta",
    room: "Lab 1, Block C",
    color: "oop",
  },
  {
    id: 7,
    start: "03:45 PM",
    end: "04:45 PM",
    subject: "Technical Communication",
    code: "HUM101",
    teacher: "Prof. Ritu Kapoor",
    room: "Room 101, Block A",
    color: "tc",
  },
];

export default function Timetable() {
  return (
    <>
      {/* Days */}
      <div className={styles.days}>
        <div className={`${styles.dayCard} ${styles.active}`}>
          <span>Mon</span>
          <small>6 May</small>
        </div>

        {[
          ["Tue", "7 May"],
          ["Wed", "8 May"],
          ["Thu", "9 May"],
          ["Fri", "10 May"],
          ["Sat", "11 May"],
          ["Sun", "12 May"],
        ].map(([day, date]) => (
          <div key={day} className={styles.dayCard}>
            <span>{day}</span>
            <small>{date}</small>
          </div>
        ))}
      </div>

      {/* Timetable */}
      <div className={styles.timetable}>
        <div className={styles.headerRow}>
          <div className={styles.timeHeader}>Time</div>
          <div className={styles.dayHeader}>Monday, 6 May 2024</div>
        </div>

        {classes.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.timeCell}>
              <span>{item.start}</span>
              <small>- {item.end}</small>
            </div>

            <div className={`${styles.classCard} ${styles[item.color]}`}>
              <div>
                <h4>{item.subject}</h4>

                <div className={styles.meta}>
                  <span>{item.code}</span>
                  <span>•</span>
                  <span>{item.teacher}</span>
                </div>
              </div>

              <div className={styles.location}>
                <HiOutlineLocationMarker />
                <span>{item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}