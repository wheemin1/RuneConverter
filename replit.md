# Viking Rune Converter

## Overview

This is a full-stack web application that converts Korean names to ancient Viking rune characters using the Elder Futhark alphabet. The application features a themed Viking aesthetic with parchment-style design and provides educational information about rune characters and their meanings.

## System Architecture

The application follows a modern full-stack architecture:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Build System**: Vite for frontend bundling and development
- **Styling**: Tailwind CSS with custom Viking-themed design system

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **State Management**: React hooks with custom useRuneConverter hook
- **UI Components**: Comprehensive shadcn/ui component library
- **Styling**: Tailwind CSS with custom Viking theme variables and fonts
- **Query Management**: TanStack Query for API state management

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Data Layer**: Drizzle ORM with PostgreSQL database
- **Storage**: Abstracted storage interface with both database and memory implementations
- **Development**: Vite integration for hot module replacement

### Database Schema
- **Users Table**: Basic user authentication structure
- **Rune Conversions Table**: Stores conversion results with Korean name, English name, rune text, and timestamp

### Core Features
- **Name Conversion**: Korean to English romanization with Elder Futhark rune mapping
- **Educational Content**: Detailed information about rune meanings and Viking history
- **Image Generation**: Canvas-based generation of shareable rune images
- **Responsive Design**: Mobile-first approach with Viking-themed aesthetics

## Data Flow

1. **User Input**: Korean name entered through form input
2. **Romanization**: Korean characters converted to English using custom romanization system
3. **Rune Conversion**: English characters mapped to Elder Futhark runes
4. **Database Storage**: Conversion results saved to PostgreSQL
5. **Display**: Results shown with detailed rune explanations and sharing options

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI components (@radix-ui components, shadcn/ui)
- Styling (Tailwind CSS, class-variance-authority, clsx)
- State management (TanStack Query)
- Utilities (date-fns, lucide-react icons)

### Backend Dependencies
- Express.js framework
- Database (Drizzle ORM, @neondatabase/serverless)
- Validation (Zod, drizzle-zod)
- Session management (connect-pg-simple)
- Development tools (tsx, esbuild)

### Development Dependencies
- Vite build system with React plugin
- TypeScript compilation
- ESLint and development tooling
- Replit-specific development plugins

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development Mode**: Vite dev server with hot reloading
- **Production Build**: Vite production build with esbuild backend compilation
- **Database**: Uses Neon serverless PostgreSQL via environment variables
- **Static Assets**: Served through Express with Vite middleware integration

The build process creates optimized bundles for both frontend and backend, with the frontend served as static files and the backend running as a Node.js server.

## Changelog

Changelog:
- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.