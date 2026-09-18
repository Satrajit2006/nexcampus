import styles from "./Classes.module.css";

const courses = [
  {
    code: "CSE301",
    name: "Data Structures",
    teacher: "Prof. Rahul Sharma",
    days: "Mon, Wed, Fri",
    time: "10:00 AM - 10:50 AM",
    room: "Room 305, Block B",
    color: "green",
  },
  {
    code: "CSE302",
    name: "Database Management Systems",
    teacher: "Prof. Raj Kumar",
    days: "Tue, Thu",
    time: "12:00 PM - 01:00 PM",
    room: "Room 201, Block A",
    color: "blue",
  },
  {
    code: "CSE303",
    name: "Software Engineering",
    teacher: "Prof. Rohit Sharma",
    days: "Mon, Wed",
    time: "02:00 PM - 03:00 PM",
    room: "Room 402, Block C",
    color: "purple",
  },
  {
    code: "CSE304",
    name: "Technical Communication",
    teacher: "Prof. Rahul Sharma",
    days: "Tue, Thu",
    time: "03:00 PM - 04:00 PM",
    room: "Room 301, Block B",
    color: "orange",
  },
  {
    code: "CSE305",
    name: "Python Programming Lab",
    teacher: "Prof. Rahul Sharma",
    days: "Fri",
    time: "04:30 PM - 06:00 PM",
    room: "Lab 1, Block C",
    color: "green",
  },
];

function CourseCard({ course }) {
  return (
    <div className={`${styles.courseCard} ${styles[course.color]}`}>
      <div className={styles.cardTop}>
        <span className={styles.courseCode}>{course.code}</span>

        <span className={styles.ongoing}>Ongoing</span>

        <button className={styles.menu}>⋮</button>
      </div>

      <h3>{course.name}</h3>

      <div className={styles.teacher}>
        👤 {course.teacher}
      </div>

      <div className={styles.info}>
        <span>▦</span>
        <span>{course.days}</span>
        <span>{course.time}</span>
      </div>

      <div className={styles.info}>
        <span>⌂</span>
        <span>{course.room}</span>
      </div>

      <button className={styles.attendance}>
        👤 Mark Attendance
      </button>

      <button className={styles.edit}>
        Edit Class <span>→</span>
      </button>
    </div>
  );
}

export default function MyClasses() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1>My Classes</h1>
          <p>
            View and manage your assigned classes, access students,
            upload materials and more.
          </p>
        </div>
      </header>

      {/* Tabs + Actions */}
      <div className={styles.toolbar}>

        <div className={styles.tabs}>
          <button className={styles.activeTab}>All Classes</button>
          <button>Ongoing</button>
          <button>Completed</button>
          <button>By Semester⌄</button>
        </div>

        <div className={styles.actions}>
          <input
            type="text"
            placeholder="⌕  Search class..."
          />

          <button>☷ Filter</button>
        </div>

      </div>

      {/* Main Layout */}
      <div className={styles.dashboard}>

        {/* Left */}
        <main>

          {/* Statistics */}
          <div className={styles.stats}>

            <div className={styles.statCard}>
              <div className={styles.icon}>▣</div>
              <div>
                <small>Total Classes</small>
                <strong>5</strong>
                <span>This Semester</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.icon}>♟</div>
              <div>
                <small>Total Students</small>
                <strong>184</strong>
                <span>Across all Classes</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.icon}>☷</div>
              <div>
                <small>Subjects</small>
                <strong>5</strong>
                <span>Unique Subjects</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.icon}>◷</div>
              <div>
                <small>Total Teaching Hours</small>
                <strong>14</strong>
                <span>Hours per week</span>
              </div>
            </div>

          </div>

          {/* Courses */}
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <CourseCard
                key={course.code}
                course={course}
              />
            ))}
          </div>

        </main>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>

          {/* Semester Overview */}
          <div className={styles.sideCard}>
            <h3>Semester Overview</h3>

            <div className={styles.circle}>
              <div>
                <strong>184</strong>
                <span>Total Students</span>
              </div>
            </div>

            <div className={styles.legend}>
              <p>
                <i className={styles.greenDot}></i>
                Ongoing Classes
                <b>5</b>
              </p>

              <p>
                <i className={styles.blueDot}></i>
                Completed Classes
                <b>0</b>
              </p>

              <p>
                <i className={styles.grayDot}></i>
                Total Subjects
                <b>5</b>
              </p>
            </div>
          </div>

          {/* Teaching Load */}
          <div className={styles.sideCard}>
            <h3>Teaching Load</h3>

            <div className={styles.load}>
              <div>
                <strong>◷ 14 hrs/week</strong>
                <span>70% of allocated load</span>
              </div>

              <div>
                <strong>20 hrs</strong>
                <span>Allocated</span>
              </div>
            </div>

            <div className={styles.progress}>
              <span></span>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}