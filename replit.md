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

- July 03, 2025. Initial setup - Basic rune converter with Korean-English-Rune conversion
- July 03, 2025. Major UI/UX upgrade - Enhanced design with manuscript-style theme, converting animation page, advanced sharing features, and improved visual effects

## Recent Changes

### UI/UX Enhancements (July 03, 2025)
- **Enhanced Visual Design**: Upgraded from basic parchment theme to sophisticated manuscript-style with gradients, shadows, and layered borders
- **Converting Animation Page**: Added immersive loading experience with progress tracking and mystical animations during conversion
- **Advanced Sharing Modal**: Comprehensive sharing options including social media, image generation, and clipboard functionality
- **Improved Input Components**: Enhanced form styling with animated effects, better placeholder text, and visual feedback
- **Responsive Layout**: Mobile-optimized design with adaptive grid layouts and touch-friendly interactions

### New Features
- **Multi-stage Conversion Process**: Added converting page with step-by-step progress visualization
- **Enhanced Share Functionality**: Modal-based sharing with multiple options (text, image, social media)
- **Improved Visual Hierarchy**: Better section organization with ornamental dividers and structured layouts
- **Advanced Animations**: Floating animations, pulse effects, converting animations, and scroll reveals

### Technical Improvements
- **CSS Architecture**: Comprehensive utility classes for consistent theming
- **Component Structure**: Modular components with enhanced props and state management
- **Error Handling**: Improved error states and user feedback systems
- **Performance**: Optimized animations and reduced layout shifts

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Manuscript/ancient book aesthetic with gradients, sophisticated animations, and immersive user experience.