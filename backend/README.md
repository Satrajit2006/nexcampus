# NexCampus Django Backend

Bare-bone REST API backend built to connect with the **React PWA frontend** and **PostgreSQL**.

---

## Quick Start

### 1. Run the Backend Server
From the `backend/` folder:
```powershell
.\.venv\Scripts\python.exe manage.py runserver
```
The API will be live at: **`http://127.0.0.1:8000/`**

---

## Endpoints Ready to Connect to React

- **Health Check**: `GET http://127.0.0.1:8000/api/health/`
- **Sample Dashboard Data**: `GET http://127.0.0.1:8000/api/dashboard/`
- **Django Admin**: `http://127.0.0.1:8000/admin/`

---

## Connecting to PostgreSQL 18

1. Create your database in PostgreSQL (e.g., using pgAdmin or PowerShell):
   ```powershell
   & "C:\Program Files\PostgreSQL\18\bin\createdb.exe" -U postgres nexcampus_db
   ```
2. Open [`backend/.env`](.env) and set:
   ```env
   USE_POSTGRES=True
   DB_NAME=nexcampus_db
   DB_USER=postgres
   DB_PASSWORD=your_actual_postgres_password
   DB_HOST=localhost
   DB_PORT=5432
   ```
3. Run migrations to create the tables in PostgreSQL:
   ```powershell
   .\.venv\Scripts\python.exe manage.py migrate
   ```

---

## CORS & React PWA Integration
`django-cors-headers` is already pre-configured to allow requests from Vite (`http://localhost:5173`). React can fetch data directly with `fetch('http://127.0.0.1:8000/api/health/')` or `axios`.
