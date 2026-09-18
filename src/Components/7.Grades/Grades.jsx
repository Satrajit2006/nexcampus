import styles from "./Grades.module.css";
import SemesterCard from "./SemesterCard";
import StatCard from "../5.Attendence/StatCard";
import GradeTable from "./GradeTable";

import {
  FaDownload,
  FaBook,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const subjects = [
  {
    code: "CS301",
    name: "Data Structure and Algorithms",
    credits: 4,
    grade: "A+",
    points: 10,
    remark: "Excellent",
  },
  {
    code: "CS302",
    name: "Digital Logic Design",
    credits: 3,
    grade: "A",
    points: 9,
    remark: "Very Good",
  },
  {
    code: "CS303",
    name: "Computer Organization",
    credits: 4,
    grade: "A",
    points: 9,
    remark: "Very Good",
  },
  {
    code: "CS304",
    name: "Operating Systems",
    credits: 4,
    grade: "A+",
    points: 10,
    remark: "Excellent",
  },
  {
    code: "MT301",
    name: "Discrete Mathematics",
    credits: 3,
    grade: "B+",
    points: 7,
    remark: "Good",
  },
];

const Grades=()=> {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Grades</h2>
        <p>
          View your semester-wise academic performance and
          download marksheets.
        </p>
      </div>

      <div className={styles.tabs}>
        <button className={styles.activeTab}>
          Overview
        </button>

        <button>SGPA/CGPA</button>
        <button>Grade History</button>
        <button>Academic Summary</button>
      </div>

      <div className={styles.content}>
        {/* LEFT PANEL */}

        <div className={styles.sidebar}>
          <h4>Your Academic Journey</h4>

          <SemesterCard
            title="B.Tech 1st Semester"
            sgpa="8.76"
          />
          <SemesterCard
            title="B.Tech 2nd Semester"
            sgpa="8.76"
          />

          <SemesterCard
            title="B.Tech 3rd Semester"
            sgpa="8.66"
          />
          <SemesterCard
            title="B.Tech 4th Semester"
            sgpa="8.66"
          />

          <SemesterCard
            title="B.Tech 5th Semester"
            sgpa="8.91"
            active
          />
          <SemesterCard
            title="B.Tech 6th Semester"
            sgpa="8.91"
            active
          />

          <SemesterCard
            title="B.Tech 7th Semester"
            sgpa="-"
          />
          <SemesterCard
            title="B.Tech 8th Semester"
            sgpa="-"
          />
        </div>

        {/* RIGHT PANEL */}

        <div className={styles.main}>
          <div className={styles.semesterHeader}>
            <div>
              <h3>B.Tech 3rd Semester</h3>
              <p>Session: 2024-25 (Odd)</p>
            </div>

            <button className={styles.downloadBtn}>
              <FaDownload />
              Download Marksheet
            </button>
          </div>

          <div className={styles.stats}>
            <StatCard
              icon={<FaBook />}
              title="SGPA"
              value="8.91"
            />

            <StatCard
              icon={<FaStar />}
              title="Credits"
              value="24"
            />

            <StatCard
              icon={<FaTrophy />}
              title="Grade Points"
              value="214"
            />

            <StatCard
              icon={<FaStar />}
              title="Rank"
              value="8"
            />
          </div>

          <GradeTable subjects={subjects} />

          <div className={styles.footerBtns}>
            <button>
              Grade Calculator
            </button>

            <button>
              <FaDownload />
              Download Marksheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Grades;