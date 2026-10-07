# Full Stack Developer Portfolio

A modern, full-stack personal portfolio application built with **React** on the frontend and **Spring Boot** with **MySQL** on the backend, containerized using **Docker**.

---

## 📁 Project Structure

```
Portfolio2/
├── Frontend/
│   └── portfolio/          # React + Vite frontend application
│       ├── src/            # Components, assets, styles
│       ├── public/         # Static assets and icons
│       └── package.json
├── Backend/
│   └── portfolioback/      # Spring Boot REST API
│       ├── src/            # Controllers, Entities, Repositories
│       ├── pom.xml         # Maven configuration
│       ├── Dockerfile      # Docker build configuration
│       └── docker-compose.yml
└── .gitignore              # Unified Git ignore rules
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS, Framer Motion
- **Icons & UI:** Lucide React, React Icons, FontAwesome
- **HTTP Client:** Axios

### Backend
- **Framework:** Java Spring Boot 3
- **ORM / Persistence:** Spring Data JPA / Hibernate
- **Database:** MySQL
- **Build Tool:** Maven

### DevOps
- **Docker & Docker Compose** for containerized deployments

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Java JDK 17+
- MySQL Server 8.0+ (or Docker)
- Maven (or use included `mvnw`)

---

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend/portfolioback
   ```

2. Configure database credentials in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
   spring.datasource.username=root
   spring.datasource.password=YOUR_PASSWORD
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *(On Windows: `mvnw.cmd spring-boot:run`)*

The backend server will run on **`http://localhost:8080`**.

---

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend/portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on **`http://localhost:5173`**.

---

## 🐳 Docker Setup (Optional)

To run backend and database with Docker:

```bash
cd Backend/portfolioback
docker compose up -d
```

---

## 👤 Author
**Ashish Gulhane**
- GitHub: [@gulhaneashish](https://github.com/gulhaneashish)
