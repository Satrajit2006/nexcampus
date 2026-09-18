import {
  ArrowRight,
  Eye,
  EyeOff,
  Headphones,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
  UserRound,
  GraduationCap,
  Cloud,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../api/axiosInstance"; 

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("auth/login/", {
        username: username,
        password: password,
      });

      const { access, refresh } = response.data;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      const decodedToken = jwtDecode(access);
      const userRole = decodedToken.role;

      if (userRole === "STUDENT") navigate("/");
      else if (userRole === "PROFESSOR") navigate("/faculty");
      else if (userRole === "STAFF") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid credentials.");
    }
  };

  return (
    <div className={styles.page}>
      {/* ================= HEADER ================= */}
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <div className={styles.logo}>
            <span className={styles.logoN}>N</span>
          </div>
          <span className={styles.logoText}>NexCampus</span>
        </div>
        <div className={styles.support}>
          <span>Need help?</span>
          <a href="#">Contact Support</a>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className={styles.main}>
        {/* LEFT SECTION */}
        <section className={styles.leftSection}>
          <div className={styles.intro}>
            <h1>
              A Smarter Way to <span>Learn, Connect & Grow</span>
            </h1>
            <p>
              NexCampus brings students, faculty and administration together on
              one unified platform.
            </p>
          </div>

          {/* FEATURES */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <GraduationCap size={18} />
              </div>
              <div>
                <h3>Smart Learning</h3>
                <p>
                  Access courses, materials and academic tools anytime, anywhere.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Users size={18} />
              </div>
              <div>
                <h3>Connected Campus</h3>
                <p>
                  Collaborate, communicate and stay updated in real-time.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <h3>Secure & Reliable</h3>
                <p>
                  Enterprise-grade security to keep your data safe and protected.
                </p>
              </div>
            </div>
          </div>

          {/* DECORATIVE WAVE */}
          <div className={styles.waveContainer}>
            <div className={styles.waveOne}></div>
            <div className={styles.waveTwo}></div>
            <div className={styles.waveThree}></div>
          </div>
        </section>

        {/* ================= LOGIN CARD ================= */}
        <section className={styles.loginSection}>
          <div className={styles.loginCard}>
            <h2>Welcome Back!</h2>
            <p className={styles.loginSubtitle}>
              Sign in to continue to NexCampus
            </p>

            {/* ERROR MESSAGE DISPLAY */}
            {error && (
              <div
                style={{
                  color: "#dc2626",
                  backgroundColor: "#fef2f2",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            {/* ROLE (Visual Only) */}
            <label className={styles.label}>Login As</label>
            <div className={styles.roleSelector}>
              <button
                className={role === "Student" ? styles.activeRole : ""}
                onClick={() => setRole("Student")}
              >
                <GraduationCap size={15} /> Student
              </button>
              <button
                className={role === "Faculty" ? styles.activeRole : ""}
                onClick={() => setRole("Faculty")}
              >
                <UserRound size={15} /> Faculty
              </button>
              <button
                className={role === "Admin" ? styles.activeRole : ""}
                onClick={() => setRole("Admin")}
              >
                <LockKeyhole size={14} /> Admin
              </button>
            </div>

            {/* FORM STARTS HERE */}
            <form onSubmit={handleLogin}>
              <div className={styles.inputGroup}>
                <label>Email or Roll Number</label>
                <div className={styles.inputWrapper}>
                  <Mail size={15} />
                  <input
                    type="text"
                    placeholder="Enter your email or roll number"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.passwordLabel}>
                  <label>Password</label>
                  <a href="#">Forgot Password?</a>
                </div>
                <div className={styles.inputWrapper}>
                  <LockKeyhole size={15} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button type="submit" className={styles.signInButton}>
                <span>Sign In</span>
                <ArrowRight size={16} />
              </button>
            </form>
            {/* FORM ENDS HERE */}

            <div className={styles.divider}>
              <span>or continue with</span>
            </div>

            {/* SOCIAL LOGIN */}
            <div className={styles.socialButtons}>
              <button>
                <span className={styles.googleIcon}>G</span> Google
              </button>
              <button>
                <span className={styles.microsoftIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                Microsoft
              </button>
            </div>

            {/* REGISTER */}
            <p className={styles.register}>
              Don't have an account? <a href="#">Contact Admin</a>
            </p>
          </div>
        </section>
      </main>

      {/* ================= BOTTOM FEATURES ================= */}
      <section className={styles.bottomFeatures}>
        <div className={styles.bottomFeature}>
          <ShieldCheck />
          <div>
            <h4>Enterprise Security</h4>
            <p>Your data is secured with advanced protection.</p>
          </div>
        </div>

        <div className={styles.bottomFeature}>
          <Cloud />
          <div>
            <h4>Cloud Powered</h4>
            <p>Scalable, fast and always up-to-date.</p>
          </div>
        </div>

        <div className={styles.bottomFeature}>
          <BarChart3 />
          <div>
            <h4>99.9% Uptime</h4>
            <p>Reliable and always available when you need it.</p>
          </div>
        </div>

        <div className={styles.bottomFeature}>
          <Headphones />
          <div>
            <h4>24/7 Support</h4>
            <p>We're here to help whenever you need us.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;