# Phase 0: Research & Technical Decisions
**Feature**: Basic Application Structure

## Frontend Framework
- **Decision**: React with React Router
- **Rationale**: React was directly requested for UI. React Router is the industry standard for client-side routing to handle the Home and Meeting Rooms pages.
- **Alternatives considered**: Next.js, Vue, vanilla JS (ruled out per direct user request).

## Styling
- **Decision**: Tailwind CSS
- **Rationale**: Requested by user. Provides utility-first styling for rapid layout generation and consistency.
- **Alternatives considered**: CSS Modules, Styled Components.

## Backend Framework
- **Decision**: Node.js + Express.js
- **Rationale**: Requested by user. Lightweight and well-suited for modular API servers.
- **Alternatives considered**: NestJS, FastAPI (ruled out per request).

## Database
- **Decision**: PostgreSQL
- **Rationale**: Requested as optional. We will define an environmental setup approach to allow starting PostgreSQL easily (e.g. pg driver setup), but defer table schema.
- **Alternatives considered**: MongoDB, SQLite.

## Testing Stack
- **Decision**: Jest, Supertest (Backend), React Testing Library (Frontend)
- **Rationale**: Fulfills Constitution Principle V (Testability). Provides established patterns for Node/React testing.
- **Alternatives considered**: Vitest, Mocha.
