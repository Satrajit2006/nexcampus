import styles from "./SemesterCard.module.css";
import { FaBookOpen } from "react-icons/fa";

export default function SemesterCard({
  title,
  sgpa,
  active,
}) {
  return (
    <div
      className={`${styles.card} ${
        active ? styles.active : ""
      }`}
    >
      <div className={styles.left}>
        <FaBookOpen />

        <div>
          <h5>{title}</h5>
          <p>SGPA: {sgpa}</p>
        </div>
      </div>
    </div>
  );
}