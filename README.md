
## 🧱 PROJECT STRUCTURE

Create a monorepo:

/reliefos-fullstack
  /frontend  → React + Vite + Tailwind
  /backend   → Flask API
  README.md

--------------------------------------------------

## ⚙️ BACKEND (Flask) – HIGH PRIORITY

### Tech:
- Python Flask
- flask-cors
- Modular structure (Blueprints)

### Structure:

backend/
  app.py
  models.py
  routes/
    reports.py
    stats.py

---

## 🔌 API ENDPOINTS

### Reports API
GET /api/reports  
POST /api/reports  
GET /api/reports/<id>  

### Stats API
GET /api/stats  

---

## 📦 DATA FORMAT

Each report:
{
  "id": number,
  "type": "Flood | Fire | Earthquake",
  "location": string,
  "severity": "Low | Medium | High",
  "status": "Active | Resolved"
}

---

## 🧠 BACKEND FEATURES

- Store data in memory (list)
- Generate unique IDs
- Return JSON responses
- Enable CORS
- Clean code organization
- Handle errors properly

---

## 🎨 FRONTEND (React) – HIGH PRIORITY

### Tech:
- React (Vite)
- Tailwind CSS
- Framer Motion (animations)
- Recharts (graphs)

---

## 📊 UI FEATURES

### Dashboard:
- KPI cards (animated count-up)
- Charts (line, bar, pie)
- Activity feed (animated)
- Sidebar navigation
- Crisis heatmap UI (color zones)

---

## 🔗 FRONTEND ↔ BACKEND

Frontend must call:
http://localhost:5000/api/...

Use fetch or axios

---

## 🎥 ANIMATIONS

Use Framer Motion for:
- Page transitions
- Card hover
- Data loading
- Feed animations

---

## 🚀 RUN COMMANDS

Backend:
cd backend
pip install flask flask-cors
python app.py

Frontend:
cd frontend
npm install
npm run dev

---

## 🧾 OUTPUT REQUIREMENTS

- Generate FULL working code
- No missing files
- No errors
- Proper folder structure
- Ready to run locally

---

## 🔥 BONUS

- Add loading states
- Add error handling
- Add mock fallback data

---

Build the entire full-stack project now.