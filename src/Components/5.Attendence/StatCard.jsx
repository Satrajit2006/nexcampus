import styles from "./StatCard.module.css";

export default function StatCard({
  icon,
  title,
  value,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>

      <div>
        <h2>{title}</h2>
        <h4>{value}</h4>
      </div>
    </div>
  );
}