# NexCampus - Current Project Overview & Inventory

This document details everything built in the **NexCampus** workspace, covering the architecture, frontend components, backend services, database configuration, routing, and dependencies.

---

## 1. System Architecture & High-Level Structure

```
NexCampus/
├── .git/                        # Local Git version control repository (branch: main)
├── src/                         # Original Complete React Campus Portal (Active UI)
│   ├── Components/
│   │   ├── 1.Header/            # Top navigation bar, search, notifications, profile
│   │   ├── 2.Sidebar/           # Main navigation drawer (routes to all modules)
│   │   ├── 3.Dashboard/         # Primary student dashboard overview
│   │   ├── 4.MyClasses/         # Course list, schedules, professor details
│   │   ├── 5.Attendence/        # Attendance charts, donut stats, logs
│   │   ├── 6.TimetablePage/     # Weekly class schedule, timetable matrix, quick links
│   │   ├── 7.Grades/            # GPA tracking, semester breakdown, grade tables
│   │   ├── 8.NoticeBoard/       # Campus announcements, filters, detailed notices
│   │   └── login/               # Multi-role login & landing screen (Student/Faculty/Admin)
│   ├── App.jsx                  # Main shell layout (Sidebar + Header + Outlet)
│   ├── main.jsx                 # React Router v7 routes definition
│   └── App.css                  # Core global styling
│
├── backend/                     # Django REST Framework Backend (PWA & Postgres Ready)
│   ├── .venv/                   # Python 3.14 isolated virtual environment
│   ├── core/                    # Django project configuration
│   │   ├── settings.py          # DRF, CORS, PostgreSQL/SQLite toggle configured
│   │   ├── urls.py              # Main URL dispatcher (/admin/, /api/)
│   │   └── wsgi.py / asgi.py
│   ├── api/                     # Starter REST API application
│   │   ├── admin.py             # Registered User & StudentProfile models in Admin
│   │   ├── models.py            # Custom User & StudentProfile data models
│   │   ├── serializers.py       # JWT token serializers with custom role/username claims
│   │   ├── views.py             # Health check & sample dashboard endpoints
│   │   └── urls.py              # API endpoint routes (/auth/login/, /auth/refresh/)
│   ├── .env                     # Database credentials (PostgreSQL / SQLite toggle)
│   ├── .env.example             # Environment variable template
│   ├── requirements.txt         # Python dependencies
│   ├── manage.py                # Django CLI
│   └── README.md                # Backend setup guide
│
├── frontend/                    # Fresh React 19 + Vite Application Folder
│   ├── src/                     # Clean template entry point
│   ├── package.json             # Isolated frontend dependencies
│   └── vite.config.js
│
├── .vscode/
│   └── extensions.json          # Curated workspace extension recommendations
├── package.json                 # Root npm dependencies (Bootstrap 5, Recharts, Icons)
├── vite.config.js               # Root Vite configuration
└── .gitignore                   # Ignore rules for node_modules, Python .venv, .env, and *.zip
```

---

## 2. Frontend Inventory (`src/`)

### Active Technologies & Libraries
* **Framework:** React 19 + Vite 8
* **Routing:** `react-router-dom` (v7)
* **UI & Styling:** Bootstrap 5 (`bootstrap`), CSS Modules (`*.module.css`), Vanilla CSS
* **Charts & Data Visualization:** `recharts`
* **Icons:** `react-icons`

### Navigation & Routing (`src/main.jsx` & `src/App.jsx`)
* **Shell Layout:** Left `Sidebar` + Top `Header` + Dynamic `<Outlet />` body.
* **Defined Routes:**
  * `/` ➔ **Home / Dashboard** (`src/Components/3.Dashboard/Home.jsx`)
  * `/classes` ➔ **My Classes** (`src/Components/4.MyClasses/Classes.jsx`)
  * `/attendance` ➔ **Attendance** (`src/Components/5.Attendence/Attendence.jsx`)
  * `/timetable` ➔ **Timetable** (`src/Components/6.TimetablePage/TimetablePage.jsx`)
  * `/grades` ➔ **Grades** (`src/Components/7.Grades/Grades.jsx`)
  * `/notices` ➔ **Notice Board** (`src/Components/8.NoticeBoard/NoticeBoard.jsx`)

### Detailed Component Inventory

| Component Directory | Files | Description & Features |
| :--- | :--- | :--- |
| **`1.Header`** | `Header.jsx`, `Header.module.css` | Search bar, user profile information, alerts, and header branding. |
| **`2.Sidebar`** | `Sidebar.jsx`, `Sidebar.module.css` | Navigation links with active route states connecting all pages. |
| **`3.Dashboard`** | `Home.jsx`, `Body.jsx`, `Calendar.jsx`, `Layer1.jsx`, `Layer2.jsx`, `Layer3.jsx`, `RSidebar.jsx` | Multi-layered student dashboard displaying quick stats, daily schedules, progress widgets, and calendar overview. |
| **`4.MyClasses`** | `Classes.jsx`, `Classes.module.css` | Comprehensive course view: ongoing subjects, professor profiles, class hours, and resources. |
| **`5.Attendence`** | `Attendence.jsx`, `AttendanceChart.jsx`, `AttendanceTable.jsx`, `DonutChart.jsx`, `StatCard.jsx`, `Calendar.jsx` | Deep analytics for attendance: Recharts bar chart, percentage donut chart, subject-wise attendance logs, and status cards. |
| **`6.TimetablePage`** | `TimetablePage.jsx`, `Timetable.jsx`, `OverviewCards.jsx`, `QuickLinks.jsx`, `UpcomingClasses.jsx` | Weekly schedule matrix with time slots, upcoming lecture cards, and quick link shortcuts. |
| **`7.Grades`** | `Grades.jsx`, `GradeTable.jsx`, `SemesterCard.jsx` | GPA calculation, semester progression cards, subject credit breakdown, and grading tables. |
| **`8.NoticeBoard`** | `NoticeBoard.jsx`, `NoticeBoard.module.css` | Interactive notice board with search, category filtering (Academic, Exam, Events), and detailed notice modals. |
| **`login`** | `LoginPage.jsx`, `LoginPage.module.css` | Multi-role portal login page (Student, Faculty, Admin) featuring password toggle, campus branding, and modern responsive split layout. |

---

## 3. Backend Inventory (`backend/`)

### Active Technologies & Libraries
* **Framework:** Django 6.1.1
* **API Toolkit:** Django REST Framework 3.18.1
* **Authentication Library:** `djangorestframework-simplejwt` 5.5.1
* **CORS Handling:** `django-cors-headers` 4.9.0
* **PostgreSQL Driver:** `psycopg` 3.3.5 & `psycopg-binary` 3.3.5
* **Environment Management:** `python-dotenv` 1.2.3
* **Python Version:** 3.14.5 in `backend/.venv`

### Configuration (`backend/core/settings.py`)
1. **User Model (`AUTH_USER_MODEL = 'api.User'`):**
   * Replaces default Django User with custom `api.User` model with roles (`STUDENT`, `PROFESSOR`, `STAFF`) and `university_id`.
2. **CORS:**
   * Pre-configured to accept cross-origin requests from `http://localhost:5173` and `http://127.0.0.1:5173`.
   * Credentials enabled for cookie/token authorization.
3. **Database Engine (Dual Support):**
   * Configured via [`backend/.env`](backend/.env).
   * **Default:** SQLite (`USE_POSTGRES=False`) for zero-configuration local testing.
   * **Production / Postgres Mode:** Toggle `USE_POSTGRES=True` to connect to PostgreSQL 18 on `localhost:5432` (`nexcampus_db`).

### Models (`backend/api/models.py`)
* **`User` (`AbstractBaseUser`, `PermissionsMixin`):**
  * `username` (unique, login identifier)
  * `university_id` (unique campus ID)
  * `full_name` (display name)
  * `role` (`STUDENT`, `PROFESSOR`, `STAFF`)
  * `is_active`, `is_staff`
  * Managed by `CustomUserManager` (`create_user`, `create_superuser`)
* **`StudentProfile` (`models.Model`):**
  * One-to-one link to `User`
  * `admission_id` (unique), `registration_number`, `course`, `session_year`

### Authentication & Endpoints (`backend/api/urls.py` & `backend/core/urls.py`)
* **`POST /api/auth/login/`** ➔ `CustomTokenObtainPairView` (Returns access & refresh tokens with custom `role` and `username` claims in JWT payload).
* **`POST /api/auth/refresh/`** ➔ `TokenRefreshView` (Renews access token).
* **`GET /api/health/`** ➔ `health_check` endpoint returning backend & database connection status.
* **`GET /api/dashboard/`** ➔ `sample_dashboard_data` endpoint for student metrics.
* **`GET /admin/`** ➔ Built-in Django administration panel with registered `User` and `StudentProfile` models.

---

## 4. Fresh Frontend Folder (`frontend/`)
* A fresh, isolated Vite + React 19 project created under `frontend/` as requested, leaving the root `src/` and `public/` files undisturbed.
* Can be run independently via `cd frontend && npm run dev`.

---

## 5. IDE & Tooling (`.vscode/`)
* **[`extensions.json`](.vscode/extensions.json):** Workspace recommendations configured for ESLint, Prettier, React snippets, Bootstrap intellisense, tag management, and Error Lens.

---

## 6. Version Control & Git Configuration (`.git/`)
* **System:** Local Git version control initialized in the workspace.
* **Primary Branch:** `main`
* **Configured Identity:** `Satrajit Chakraborty <satrajit2006chakraborty@gmail.com>`
* **Initial Commit:** `django setup done`
* **Exclusion Safeguards ([`.gitignore`](.gitignore)):**
  * Environment variables (`.env`, `backend/.env`)
  * Python environments (`backend/.venv/`, `venv/`)
  * Local databases (`*.sqlite3`)
  * Package managers & build artifacts (`node_modules/`, `dist/`)
  * Archive bundles (`*.zip`, `*.tar.gz`)
