import styles from "./NoticeBoard.module.css";

import {
    FiSearch,
    FiFilter,
    FiVolume2,
    FiBookOpen,
    FiClipboard,
    FiCalendar,
    FiBriefcase,
    FiChevronRight,
    FiClock,
} from "react-icons/fi";

const notices = [
    {
        title: "Annual Tech Fest 2024 – Registrations Open!",
        category: "College Notice",
        icon: <FiVolume2 />,
        color: "#3B82F6",
        bg: "#EEF5FF",
        priority: "Important",
        date: "May 10, 2024",
        time: "10:30 AM",
    },
    {
        title: "CSE Department Meeting",
        category: "Department Notice",
        icon: <FiBookOpen />,
        color: "#10B981",
        bg: "#EDFDF7",
        priority: "High Priority",
        date: "May 9, 2024",
        time: "03:00 PM",
    },
    {
        title: "Mid Semester Examination Schedule",
        category: "Exam Notice",
        icon: <FiClipboard />,
        color: "#8B5CF6",
        bg: "#F5F0FF",
        priority: "High Priority",
        date: "May 8, 2024",
        time: "11:15 AM",
    },
    {
        title: "Workshop on AI & Machine Learning",
        category: "Event Notice",
        icon: <FiCalendar />,
        color: "#F59E0B",
        bg: "#FFF8E8",
        priority: "New",
        date: "May 7, 2024",
        time: "09:45 AM",
    },
    {
        title: "Infosys Campus Recruitment Drive",
        category: "Placement Notice",
        icon: <FiBriefcase />,
        color: "#EF4444",
        bg: "#FFF1F1",
        priority: "New",
        date: "May 6, 2024",
        time: "04:30 PM",
    },
];

const NoticeBoard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <h1>Notice Board</h1>
                <p className={styles.subtitle}>
                    Stay informed with the latest announcements and updates.
                </p>

                <div className={styles.tabs}>
                    <button className={styles.activeTab}>All Notices</button>
                    <button>College Notices</button>
                    <button>Department Notices</button>
                    <button>Exam Notices</button>
                    <button>Placement Notices</button>
                    <button>Events</button>


                </div>

                <div className={styles.topBar}>
                    <div className={styles.searchBox}>
                        <FiSearch />
                        <input type="text" placeholder="Search notices..." />

                    </div>
                    <button className={styles.filterBtn}>
                        <FiFilter />
                        Filter
                    </button>
                </div>

                <div className={styles.noticeList}>
                    {notices.map((notice, index) => (
                        <div key={index} className={styles.noticeCard}>
                            <div
                                className={styles.iconBox}
                                style={{
                                    background: notice.bg,
                                    color: notice.color,
                                }}
                            >
                                {notice.icon}
                            </div>

                            <div className={styles.noticeInfo}>
                                <span
                                    className={styles.category}
                                    style={{
                                        background: notice.bg,
                                        color: notice.color,
                                    }}
                                >
                                    {notice.category}
                                </span>

                                <h3>{notice.title}</h3>

                                <p>
                                    Registration is now open for TechNova 2024. Participate in
                                    various events and showcase your talent.
                                </p>
                            </div>

                            <div className={styles.noticeMeta}>
                                <span
                                    className={`${styles.badge} ${notice.priority === "Important"
                                            ? styles.important
                                            : notice.priority === "High Priority"
                                                ? styles.high
                                                : styles.new
                                        }`}
                                >
                                    {notice.priority}
                                </span>

                                <div>{notice.date}</div>

                                <div className={styles.time}>
                                    <FiClock />
                                    {notice.time}
                                </div>
                            </div>

                            <FiChevronRight className={styles.arrow} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sidebar}>
                <div className={styles.sideCard}>
                    <h3>Notice Categories</h3>

                    <ul>
                        <li>
                            All Notices <span>32</span>
                        </li>
                        <li>
                            College Notices <span>10</span>
                        </li>
                        <li>
                            Department Notices <span>8</span>
                        </li>
                        <li>
                            Exam Notices <span>6</span>
                        </li>
                        <li>
                            Placement Notices <span>5</span>
                        </li>
                        <li>
                            Events <span>3</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.sideCard}>
                    <h3>Important Links</h3>

                    <ul>
                        <li>
                            Academic Calendar <FiChevronRight />
                        </li>
                        <li>
                            Exam Timetable <FiChevronRight />
                        </li>
                        <li>
                            Holiday List <FiChevronRight />
                        </li>
                        <li>
                            Grievance Portal <FiChevronRight />
                        </li>
                        <li>
                            Contact Administration <FiChevronRight />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default NoticeBoard;