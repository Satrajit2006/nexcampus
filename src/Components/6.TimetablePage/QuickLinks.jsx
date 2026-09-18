import styles from "./QuickLinks.module.css";
import {
  HiOutlineDownload,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiChevronRight,
} from "react-icons/hi";

export default function QuickLinks() {
  return (
    <div className={styles.card}>
      <h3>Quick Links</h3>

      <div className={styles.link}>
        <HiOutlineDownload />
        <span>Download Timetable</span>
        <HiChevronRight />
      </div>

      <div className={styles.link}>
        <HiOutlineDocumentText />
        <span>Exam Schedule</span>
        <HiChevronRight />
      </div>

      <div className={styles.link}>
        <HiOutlineAcademicCap />
        <span>Academic Calendar</span>
        <HiChevronRight />
      </div>
    </div>
  );
}