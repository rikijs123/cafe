# Cafe Website

A full-stack cafe website built with React, TypeScript, Express, and SQLite.

## Project Structure

```
project/
├── src/                    # React frontend
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/                 # Express backend
│   ├── index.ts
│   ├── database.ts
│   ├── middleware/
│   │   └── auth.ts
│   └── routes/
│       ├── auth.ts
│       ├── public.ts
│       └── admin/
│           ├── menu.ts
│           ├── hours.ts
│           ├── gallery.ts
│           ├── contact.ts
│           ├── settings.ts
│           └── testimonials.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd project
npm install
```

### Development

Run both frontend and backend in development mode:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

The frontend will be available at `http://localhost:5173`
The backend will run on `http://localhost:3000`

### Build

```bash
npm run build
```

## Features

- **Menu Management**: Add, edit, delete menu items
- **Hours Management**: Set cafe operating hours
- **Gallery**: Upload and manage cafe photos
- **Testimonials**: Display customer reviews
- **Contact Information**: Manage contact details
- **Authentication**: User login and registration

## API Endpoints

### Public
- `GET /api/public` - Get all public data (menu, hours, testimonials)
- `GET /api/public/menu` - Get menu items
- `GET /api/public/hours` - Get operating hours
- `GET /api/public/testimonials` - Get testimonials

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Admin (Protected)
- `GET/POST /api/admin/menu` - Manage menu
- `GET/PUT /api/admin/hours` - Manage hours
- `GET/POST/DELETE /api/admin/gallery` - Manage gallery
- `GET/POST/DELETE /api/admin/testimonials` - Manage testimonials
- `GET/PUT /api/admin/contact` - Manage contact info

## Technologies

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Express, TypeScript
- **Database**: SQLite
- **Build Tool**: Vite

## License

MIT