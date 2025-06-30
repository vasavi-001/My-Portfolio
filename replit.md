# Personal Portfolio Website - Vasavi Prakash

## Overview

This is a modern portfolio website for Vasavi Prakash, a Product Manager and Co-founder with expertise in AI-powered products, user research, and 0-to-1 product development. The application showcases professional experience, case studies, skills, and provides a contact mechanism for potential opportunities.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring Memphis-style aesthetics
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data handling
- **Session Management**: In-memory storage (development), prepared for PostgreSQL sessions

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with smooth scrolling
2. **Hero Section**: Dynamic introduction with Memphis-style animations
3. **About Section**: Professional overview with skills highlight
4. **Experience Timeline**: Chronological work experience display
5. **Case Studies**: Interactive showcase of product case studies
6. **Skills Section**: Technical and product management capabilities
7. **Contact Section**: Form-based contact mechanism with toast notifications

### Backend Components
1. **API Routes**: RESTful endpoints for contact form and resume download
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Schema Management**: Drizzle schema definitions with Zod validation
4. **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Processing**: Express routes handle requests with validation
3. **Data Storage**: Contact messages stored via storage abstraction layer
4. **Response Handling**: Responses managed through query client with error handling
5. **UI Updates**: Toast notifications provide user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Server**: Express with Vite middleware for HMR
- **Database**: Neon serverless PostgreSQL
- **Asset Handling**: Vite dev server with alias resolution
- **Error Overlay**: Replit runtime error modal integration

### Production Build
- **Client Build**: Vite optimization with bundle splitting
- **Server Build**: esbuild compilation to ESM format
- **Static Assets**: Served from dist/public directory
- **Database Migrations**: Drizzle Kit for schema management

### Environment Configuration
- **DATABASE_URL**: Required environment variable for database connection
- **NODE_ENV**: Environment-specific behavior configuration
- **Build Scripts**: Separate development and production workflows

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```