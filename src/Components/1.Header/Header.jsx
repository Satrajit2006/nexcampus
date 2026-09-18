import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left Section */}
      <div className={styles.left}>
        <button className={styles.menuBtn}>
          ☰
        </button>

        <div>
          <h1 className={styles.title}>
            Good Morning, Alex 👋
          </h1>
          <p className={styles.subtitle}>
            Here's what's happening in your campus today.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

        <div className={styles.notification}>
          🔔
          <span className={styles.badge}>5</span>
        </div>

        <div className={styles.profile}>
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h4>Alex Johnson</h4>
            <p>B.Tech CSE</p>
          </div>

          <span className={styles.arrow}>▼</span>
        </div>
      </div>
    </header>
  );
}