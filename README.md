# Ayush Garg | Software Engineer III Portfolio

A premium, interactive developer portfolio featuring a terminal-inspired UI, career timeline, and project showcase. Built with a focus on high-performance backend architecture and mission-critical AI solutions.

## 🚀 Features

- **Terminal-Style OS Interface**: Interactive loading sequence and file-system navigation.
- **Identity System**: Deep dive into core technical skills and engineering philosophy.
- **Career Logs**: Detailed work history from Jio Platforms, Innovaccer, and American Express.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Secure Contact Channel**: Integrated contact form with server-side processing.

## 🛠 Tech Stack

- **Frontend**: React 19, Motion (Framer Motion), Lucide Icons.
- **Styling**: Tailwind CSS 4.0.
- **Backend**: Express.js (Full-stack setup with Vite middleware).
- **Runtime**: Node.js with TypeScript (`tsx`).
- **AI Integration**: Google Gemini API ready.

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Copy `.env.example` to `.env` and fill in the required keys.
   ```bash
   cp .env.example .env
   ```

### Development

Start the development server (runs Express with Vite middleware):
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Build & Production

1. Build the production assets:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🔐 Environment Variables

- `GEMINI_API_KEY`: Required for Gemini AI features.
- `RESEND_API_KEY`: Optional, used for the contact form email functionality.
- `APP_URL`: The base URL of the deployed application.

## 📄 License

MIT
