#  DayLenge

DayLenge is a full-stack Progressive Web App (PWA) that gives you a new random daily challenge every day. Complete challenges, build your streak, and compete with friends on the global leaderboard.

---

##  Live Demo

- **Frontend:** https://daylenge.vercel.app
- **Backend:** https://daylenge.onrender.com

---

##  Features

-  **Daily Challenge Generator** – A new random challenge every day
-  **Challenge Status** – Mark challenges as completed or failed
-  **Streak Counter** – Track how many days in a row you've completed a challenge
-  **Global Leaderboard** – Compete with friends and see who has the longest streak
-  **Authentication** – Register and login with JWT-based authentication
-  **PWA Support** – Install the app on your iPhone or Android home screen

---

##  Architecture

```
React Frontend (Vercel)
        ↕ REST API (JSON + JWT)
Spring Boot Backend (Render)
        ↕
PostgreSQL Database (Supabase)
```

---

##  Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI Framework |
| React Router | Client-side navigation |
| CSS Modules | Component styling |
| localStorage | Local state persistence |
| Vercel | Hosting & deployment |

### Backend
| Technology | Purpose |
|---|---|
| Java 21 | Programming language |
| Spring Boot 4 | Backend framework |
| Spring Security | Authentication & authorization |
| JWT (jjwt) | Token-based authentication |
| Spring Data JPA | Database access |
| Hibernate | ORM |
| PostgreSQL | Production database |
| H2 | Local development database |
| Render | Hosting & deployment |

---

## 📁 Project Structure

```
DayLenge/
├── frontend/                        # React PWA
│   ├── public/
│   └── src/
│       ├── components/              # Reusable UI components
│       │   ├── Button.jsx
│       │   ├── Button.css
│       │   ├── CategoryBadge.jsx
│       │   ├── CategoryBadge.css
│       │   ├── ChallengeCard.jsx
│       │   ├── ChallengeCard.css
│       │   ├── StreakCounter.jsx
│       │   ├── StreakCounter.css
│       │   ├── TopRow.jsx
│       │   └── TopRow.css
│       ├── data/
│       │   └── challenges.js        # Challenge dataset
│       ├── hooks/                   # Custom React hooks
│       │   ├── useChallenge.js      # Challenge logic
│       │   └── useStreak.js         # Streak logic
│       ├── pages/                   # App pages
│       │   ├── HomePage.jsx
│       │   ├── HomePage.css
│       │   ├── LeaderboardPage.jsx
│       │   ├── LeaderboardPage.css
│       │   ├── LoginPage.jsx
│       │   └── LoginPage.css
│       ├── services/                # API & storage services
│       │   ├── authService.js       # Backend API calls
│       │   └── storageService.js    # localStorage abstraction
│       └── App.js                   # Router & private routes
│
└── backend/                         # Spring Boot REST API
    └── src/main/java/com/lelo/daylenge/
        ├── config/                  # Configuration
        │   ├── CorsConfig.java
        │   └── SecurityConfig.java
        ├── controller/              # REST endpoints
        │   ├── AuthController.java
        │   ├── LeaderboardController.java
        │   └── UserController.java
        ├── dto/                     # Data Transfer Objects
        │   ├── AuthResponse.java
        │   ├── LeaderboardEntry.java
        │   ├── LoginRequest.java
        │   ├── ProfileResponse.java
        │   ├── RegisterRequest.java
        │   └── StreakUpdateRequest.java
        ├── model/                   # JPA Entities
        │   └── User.java
        ├── repository/              # Database access
        │   └── UserRepository.java
        ├── security/                # JWT utilities
        │   ├── JwtFilter.java
        │   └── JwtUtil.java
        └── service/                 # Business logic
            ├── LeaderboardService.java
            └── UserService.java
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | ❌ | Register a new user |
| POST | `/api/auth/login` | ❌ | Login and receive JWT token |

### User
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/user/profile` | ✅ | Get current user profile & streak |
| PUT | `/api/user/streak` | ✅ | Increment or reset streak |

### Leaderboard
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/leaderboard` | ✅ | Get all users sorted by streak |

---

##  Local Development

### Prerequisites
- Node.js 22+
- Java 21+
- Maven

### Frontend

```bash
cd frontend
npm install
npm start
```

App runs on `http://localhost:3000`

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

API runs on `http://localhost:8080`

The backend uses an **H2 in-memory database** locally – no setup required.

### Environment Variables

**Frontend** (`.env` in `/frontend`):
```
REACT_APP_API_URL=http://localhost:8080/api
```

**Backend** (`application.properties`):
```properties
jwt.secret=your-secret-key-minimum-32-characters
```

---

##  Install as PWA on iPhone

1. Open the app in **Safari**
2. Tap the **Share** button
3. Tap **"Add to Home Screen"**
4. Tap **"Add"**

The app will appear on your home screen like a native app!

---

##  Security

- Passwords are hashed using **BCrypt**
- Authentication uses **JWT tokens** (24h expiration)
- All protected endpoints require a valid Bearer token
- CORS is configured to only allow requests from trusted origins

---

##  Deployment

| Service | Purpose | Plan |
|---|---|---|
| Vercel | Frontend hosting | Free |
| Render | Backend hosting | Free |
| Supabase | PostgreSQL database | Free |

---

## 👨‍💻 Author

Built by **Leonas** as a full-stack learning project.
