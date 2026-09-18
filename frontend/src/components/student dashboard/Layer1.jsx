import styles from "./Layer1.module.css";

const Layer1 = () => {
  const cards = [
    {
      title: "My Classes",
      value: "5",
      subtitle: "Total Classes",
      emoji: "📘",
      color: "#14b8a6",
    },
    {
      title: "Attendance",
      value: "92%",
      subtitle: "This Month",
      emoji: "📅",
      color: "#2563eb",
      graph: true,
    },
    {
      title: "Assignments",
      value: "3",
      subtitle: "Pending",
      emoji: "📋",
      color: "#7c3aed",
    },
    {
      title: "Average Grade",
      value: "A-",
      subtitle: "This Semester",
      emoji: "⭐",
      color: "#f59e0b",
      graph: true,
    },
  ];

  return (
    <div className={styles.dashboard}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <div
            className={styles["icon-box"]}
            style={{ backgroundColor: card.color }}
          >
            {card.emoji}
          </div>
          <div className={styles.inf2}>
            <h4>{card.title}</h4>
            <h1>{card.value}</h1>
            <p>{card.subtitle}</p>
          </div>
          {card.graph && (
            <div className={styles.graph}>
              <svg viewBox="0 0 100 30">
                <path
                  d="M0 20 Q10 10 20 18 T40 15 T60 18 T80 8 T100 12"
                  fill="none"
                  stroke={card.color}
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Layer1;
