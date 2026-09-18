# NexCampus - Current Project Overview & Inventory

This document details everything built, configured, and deployed in the **NexCampus** workspace, covering system architecture, frontend components, backend services, database configuration, routing, dependencies, and version control status.

---

## 1. System Architecture & High-Level Structure

```
NexCampus/
├── .git/                        # Local & Remote Git repository (GitHub: Satrajit2006/nexcampus, branch: main)
│
├── frontend/                    # Active React 19 + Vite Application (Authenticated Client)
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstance.js # Central Axios client (auth headers & auto 401 refresh interceptors)
│   │   ├── components/
│   │   │   ├── 1.Header/        # Top navigation header, user profile, alerts
│   │   │   ├── 2.Sidebar/       # Primary left navigation drawer
│   │   │   ├── login/           # Multi-role Login portal (Student / Faculty / Admin)
│   │   │   └── student dashboard/ # Student overview (Home, Layer1, Layer2, Layer3, Calendar)
│   │   ├── App.jsx              # Application router shell (Login, DashboardLayout, fallback)
│   │   ├── dashboardlayout.jsx  # Persistent dashboard layout (Sidebar + Header + Outlet)
│   │   ├── main.jsx             # React Router DOM BrowserRouter entry point
│   │   ├── App.css              # Global layout styles
│   │   └── index.css            # Base typography & resets
│   ├── package.json             # Frontend dependencies (React 19, React Router 7, Axios, Lucide, JWT-Decode)
│   └── vite.config.js           # Vite dev server configuration
│
├── backend/                     # Django REST Framework Backend (PWA & Postgres Ready)
│   ├── .venv/                   # Python 3.14 isolated virtual environment
│   ├── core/                    # Django project configuration
│   │   ├── settings.py          # DRF, CORS, PostgreSQL/SQLite toggle configured
│   │   ├── urls.py              # Main URL dispatcher (/admin/, /api/)
│   │   └── wsgi.py / asgi.py
│   ├── api/                     # REST API application
│   │   ├── admin.py             # Registered User & StudentProfile models in Admin
│   │   ├── models.py            # Custom User & StudentProfile data models
│   │   ├── serializers.py       # Custom JWT serializers (case-insensitive login & role claims)
│   │   ├── views.py             # Health check & sample dashboard endpoints
│   │   └── urls.py              # API endpoint routes (/auth/login/, /auth/refresh/)
│   ├── .env                     # Database credentials (PostgreSQL / SQLite toggle)
│   ├── .env.example             # Environment variable template
│   ├── requirements.txt         # Python dependencies
│   ├── manage.py                # Django CLI
│   └── README.md                # Backend setup guide
│
├── src/                         # Original standalone React component inventory & templates
│   ├── Components/              # Reference component library (Classes, Attendance, Timetable, Grades, Notices)
│   ├── App.jsx
│   └── main.jsx
│
├── .vscode/
│   └── extensions.json          # Curated workspace extension recommendations
├── package.json                 # Root npm configuration
├── vite.config.js               # Root Vite configuration
└── .gitignore                   # Exclusion rules (node_modules, .venv, *.sqlite3, .env, *.zip)
```

---

## 2. Frontend Application Inventory (`frontend/`)

### Active Technologies & Libraries
* **Framework:** React 19 + Vite 8
* **Routing:** `react-router-dom` (v7)
* **HTTP Client:** `axios` (`^1.20.0`)
* **Token Utilities:** `jwt-decode` (`^4.0.0`)
* **Icons:** `lucide-react` (`^1.47.0`), `react-icons` (`^5.6.0`)
* **Styling:** CSS Modules (`*.module.css`), Vanilla CSS

### Core Authentication & Layout Modules
1. **Axios Client (`frontend/src/api/axiosInstance.js`):**
   * Configured with `baseURL: 'http://127.0.0.1:8000/api/'`.
   * **Request Interceptor:** Automatically extracts `access_token` from `localStorage` and injects `Authorization: Bearer <token>` on all outbound API requests.
   * **Response Interceptor:** Automatically catches HTTP 401 Unauthorized responses, attempts a seamless silent token refresh against `/api/auth/refresh/` using `refresh_token`, retries the original request, or redirects to `/login` if credentials expire.

2. **Login Portal (`frontend/src/components/login/LoginPage.jsx` & `LoginPage.module.css`):**
   * **Role Switching:** Interactive role tabs (Student, Faculty, Admin).
   * **Credential Form:** Controlled input bindings for `username` and `password`.
   * **Password Privacy:** Show/Hide password toggle with dynamic Lucide icons (`Eye`, `EyeOff`).
   * **Error Feedback:** Prominent in-card alert banners displaying backend validation errors.
   * **Token Handling & Redirection:**
     * Submits credentials to `POST /api/auth/login/`.
     * Securely stores `access_token` and `refresh_token` in `localStorage`.
     * Uses `jwtDecode` to unpack user role claims.
     * Directs students to `/`, professors to `/faculty`, and staff to `/admin`.
   * **Branding:** Responsive split-screen desktop layout with enterprise security highlights and modern gradients.

3. **Dashboard Shell (`frontend/src/dashboardlayout.jsx`):**
   * High-level shell rendering fixed `<Sidebar />` on the left and sticky `<Header />` on top.
   * Injects dynamic child routes via `<Outlet />`.

4. **Routing Architecture (`frontend/src/App.jsx` & `frontend/src/main.jsx`):**
   * **`/login`** ➔ `LoginPage`
   * **`/`** ➔ `DashboardLayout` wrapping the index route `<Home />` (`student dashboard`)
   * **`*`** ➔ Fallback redirect to `/login`

---

## 3. Backend Inventory (`backend/`)

### Active Technologies & Libraries
* **Framework:** Django 6.1.1
* **API Toolkit:** Django REST Framework 3.18.1
* **Authentication:** `djangorestframework-simplejwt` 5.5.1
* **CORS Handling:** `django-cors-headers` 4.9.0
* **Database Driver:** `psycopg` 3.3.5 & `psycopg-binary` 3.3.5 (PostgreSQL ready)
* **Configuration:** `python-dotenv` 1.2.3
* **Python Runtime:** 3.14.5 in `backend/.venv`

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

### Endpoints & Serializers (`backend/api/`)
* **`POST /api/auth/login/`** ➔ `CustomTokenObtainPairView`
  * Uses `CustomTokenObtainPairSerializer` supporting case-insensitive username login.
  * Injects `role` and `username` claims directly into the JWT token payload.
* **`POST /api/auth/refresh/`** ➔ `TokenRefreshView` (Renews access tokens using refresh token).
* **`GET /api/health/`** ➔ Server & database connectivity status.
* **`GET /api/dashboard/`** ➔ Sample student profile & metrics payload.
* **`GET /admin/`** ➔ Built-in Django administration panel with registered `User` and `StudentProfile` models.

---

## 4. Git & GitHub Version Control (`.git/`)

* **Repository Remote:** [`https://github.com/Satrajit2006/nexcampus.git`](https://github.com/Satrajit2006/nexcampus.git)
* **Default Branch:** `main`
* **Author Identity:** `Satrajit Chakraborty <satrajit2006chakraborty@gmail.com>`
* **Recent Commits:**
  1. `cd443d4` — *Add MIT License to the project* (by Satrajit2006 on GitHub)
  2. `d82fde9` — *django setup done*
  3. `38a543c` — *login done need to fix ui size prb*
* **Security & Exclusion Safeguards ([`.gitignore`](.gitignore)):**
  * Secrets: `.env`, `backend/.env`
  * Environments: `backend/.venv/`, `venv/`
  * Databases: `*.sqlite3`
  * Dependencies & Builds: `node_modules/`, `dist/`
  * Binary Archives: `*.zip`, `*.tar.gz` (including `NexCampus.zip`)

---

## 5. Milestone Status & Completion Checklist

- [x] Django REST Framework backend initialized & configured
- [x] Dual Database support (SQLite default + PostgreSQL toggle)
- [x] Custom User model with roles (`STUDENT`, `PROFESSOR`, `STAFF`)
- [x] JWT Authentication & Token Refresh endpoints active
- [x] Axios instance configured with auto-token injection & auto-refresh
- [x] Multi-role Login page (role switcher, password visibility, error alert banner)
- [x] Role-based navigation flow (`STUDENT` ➔ `/`, `PROFESSOR` ➔ `/faculty`, `STAFF` ➔ `/admin`)
- [x] Persistent Dashboard Layout shell (`Sidebar` + `Header` + `<Outlet />`)
- [x] Local Git repository initialized with protected `.gitignore` rules
- [x] Remote linked and pushed to GitHub (`Satrajit2006/nexcampus` on `main`)
- [x] **LOGIN DONE ✅**
