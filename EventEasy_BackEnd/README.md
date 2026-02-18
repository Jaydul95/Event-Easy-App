# EventEasy Backend

Node.js/Express backend API for the EventEasy event booking application.

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** bcrypt for password hashing

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/add-new-user` | Register a new user |
| POST | `/verify-user` | Login/authenticate user |
| POST | `/save-booking` | Create a new event booking |
| POST | `/fetch-bookings` | Get bookings by user ID |

## Local Development Setup

### Prerequisites
* Node.js 18+
* PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/EventEasy.git
cd EventEasy/EventEasy_BackEnd
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Generate Prisma client and push schema
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server
```bash
npm start
```

Server will run on `http://localhost:8080`

## Deployment on Render

1. Create a new **Web Service** on Render
2. Connect your GitHub repository
3. Configure the service:
   * **Build Command:** `npm install && npx prisma generate`
   * **Start Command:** `node index.js`
4. Add environment variable:
   * `DATABASE_URL` = Your Render PostgreSQL Internal URL

## Database Schema

```prisma
model User {
  id       Int     @id @default(autoincrement())
  username String? @unique
  password String?
}

model Booking {
  id      Int       @id @default(autoincrement())
  name    String?
  userId  Int?
  eventId String?
  date    DateTime?
  email   String?
}
```

## License

ISC
