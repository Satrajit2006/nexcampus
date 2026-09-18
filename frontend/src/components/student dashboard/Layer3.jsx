import styles from "./Layer3.module.css"


const Layer3 = () => {
  const courses = [
    {
      title: "Data Structures",
      code: "CSE301",
      progress: 75,
      color: "#14b8a6",
    },
    {
      title: "DBMS",
      code: "CSE302",
      progress: 60,
      color: "#2196f3",
    },
    {
      title: "Software Engineering",
      code: "CSE303",
      progress: 80,
      color: "#8b5cf6",
    },
    {
      title: "Computer Networks",
      code: "CSE304",
      progress: 65,
      color: "#f59e0b",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Course Progress</h2>
        <span>View All Courses</span>
      </div>

      <div className={styles["course-grid"]}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            <h3>{course.title}</h3>
            <p className="code">{course.code}</p>

            <div className={styles["progress-section"]}>
              <div className={styles["progress-bar"]}>
                <div
                  className={styles["progress-fill"]}
                  style={{
                    width: `${course.progress}%`,
                    background: course.color,
                  }}
                ></div>
              </div>

              <div className={styles["progress-info"]}>
                <span className={styles.percent}>{course.progress}%</span>
                <span className={styles.text}>Progress</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layer3;
