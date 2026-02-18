# EventEasy

A full stack event booking application built with React and Node.js.

![EventEasy](https://img.shields.io/badge/React-18-blue) ![Node](https://img.shields.io/badge/Node.js-Express-green) ![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)

## Overview

EventEasy is a web application that allows users to discover and book events. Users can create accounts, browse available events, make bookings, and manage their reservations.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript, Material UI |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL with Prisma ORM |
| **Authentication** | bcrypt password hashing |

## Features

* User Registration and Authentication
* Real time Event Discovery
* Event Booking System
* Personal Booking Management
* Responsive Design

## Project Structure

```
EventEasy/
├── EventEasy_FrontEnd/    # React frontend application
│   ├── src/
│   │   ├── api/           # API service layer
│   │   ├── Component/     # React components
│   │   ├── Layout/        # Layout components
│   │   └── store/         # State management
│   └── package.json
│
└── EventEasy_BackEnd/     # Node.js backend API
    ├── src/
    │   ├── controller/    # Route controllers
    │   ├── dbHandler/     # Database operations
    │   ├── prisma/        # Database schema
    │   └── utils/         # Utility functions
    └── package.json
```

## Quick Start

### Prerequisites
* Node.js 18+
* PostgreSQL database

### Backend Setup
```bash
cd EventEasy_BackEnd
npm install
cp .env.example .env
# Configure your DATABASE_URL in .env
npx prisma generate
npx prisma db push
npm start
```

### Frontend Setup
```bash
cd EventEasy_FrontEnd
npm install
npm start
```

## Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | `https://your-app.vercel.app` |
| Backend | Render | `https://your-api.onrender.com` |
| Database | Render PostgreSQL | Internal connection |

See individual README files in each folder for detailed deployment instructions.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/add-new-user` | Register new user |
| POST | `/verify-user` | User login |
| POST | `/save-booking` | Create booking |
| POST | `/fetch-bookings` | Get user bookings |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Author

Built as an academic project demonstrating full stack web development with cloud deployment.
