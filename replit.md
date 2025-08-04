# Overview

This is a full-stack web application for Onalenna Rehabilitation Hub, Botswana's first rehabilitation center. The application is built as a single landing page showcasing the organization's mission, services, and donation capabilities. It serves as a comprehensive informational hub for individuals seeking addiction treatment and mental health support, as well as potential donors looking to support the cause.

The application uses a modern React frontend with shadcn/ui components and a simple Express.js backend, designed to handle both informational content delivery and basic data operations through a PostgreSQL database setup.

## Recent Changes

- Migrated from Lovable to Replit environment successfully
- Updated all branding from Lovable to Onalenna Rehabilitation Hub
- Added comprehensive SEO meta tags and Open Graph tags
- Enhanced favicon and branding consistency with cache-busting parameters
- Increased logo size and improved navigation responsiveness
- Fixed Tailwind CSS configuration for custom gradients and shadows
- Completely removed all Heart icons (Lovable branding) and replaced with Shield icons
- Cleaned up all remaining Lovable references from components and assets
- Updated favicon with proper Onalenna logo and multiple format support

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA mode
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **State Management**: TanStack React Query for server state management
- **Routing**: React Router with client-side routing
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling the server code

## Data Storage Architecture
- **Database**: PostgreSQL (configured for use with Neon Database)
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema**: Type-safe database schema with Zod validation
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schema
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Hot Reloading**: Vite HMR for frontend, tsx watch mode for backend

## Design System
- **Theme**: Custom healthcare-focused color palette with teal primary colors
- **Typography**: Tailwind's default font stack with custom sizing
- **Components**: Comprehensive UI component library from shadcn/ui
- **Responsive**: Mobile-first responsive design approach

## Key Features
- **Landing Page**: Single comprehensive page with multiple sections
- **Contact Forms**: Contact functionality with form validation
- **Donation Interface**: Structured donation flow with preset amounts
- **Mobile Responsive**: Full mobile optimization with responsive navigation
- **Performance**: Optimized images and modern web performance practices

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service for production database
- **Connection**: Environment-based database URL configuration

## UI Components
- **Radix UI**: Headless UI primitives for accessible components
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form management with validation

## Development Tools
- **Replit Integration**: Configured for Replit development environment
- **Vite Plugins**: Runtime error overlay and cartographer for development

## Build and Deployment
- **esbuild**: Server code bundling for production
- **PostCSS**: CSS processing with Tailwind and autoprefixer
- **TypeScript**: Full type safety across the application

## Third-party Integrations
- **Date-fns**: Date manipulation library
- **Class Variance Authority**: Component variant management
- **cmdk**: Command palette component library
- **Embla Carousel**: Carousel/slider functionality