# EventEasy Frontend

React/TypeScript frontend for the EventEasy event booking application.

## Tech Stack

* **Framework:** React 18 with TypeScript
* **UI Library:** Material UI (MUI)
* **Routing:** React Router v6
* **HTTP Client:** Axios
* **State Management:** Custom store with React hooks
* **Notifications:** React Toastify

## Features

* User registration and login
* Browse real time events
* Book events
* View personal bookings
* Responsive Material UI design

## Local Development Setup

### Prerequisites
* Node.js 18+
* Backend API running on port 8080

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/EventEasy.git
cd EventEasy/EventEasy_FrontEnd
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (optional for local dev)
```bash
cp .env.example .env.local
# Edit .env.local if your backend is not on localhost:8080
```

4. Start the development server
```bash
npm start
```

App will run on `http://localhost:3000`

## Deployment on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Configure the project:
   * **Framework Preset:** Create React App
   * **Root Directory:** `EventEasy_FrontEnd`
4. Add environment variable:
   * `REACT_APP_API_URL` = Your Render backend URL (e.g., `https://eventeasy-api.onrender.com/`)
5. Deploy!

## Project Structure

```
src/
├── api/              # API service methods
├── assets/           # Images and static files
├── Component/        # React components (Event, Login, SignUp, etc.)
├── Layout/           # Layout components (NavBar, Router)
├── store/            # Global state management
├── config.ts         # API configuration
└── App.tsx           # Main app component
```

## Available Scripts

* `npm start` : Run development server
* `npm run build` : Build for production
* `npm test` : Run tests

## License

ISC
