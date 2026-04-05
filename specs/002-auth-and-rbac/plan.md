# Implementation Plan: Authentication and Role-Based Access Control

**Branch**: `002-auth-and-rbac` | **Date**: 2026-04-05 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-auth-and-rbac/spec.md`

## Summary

Implement user authentication (signup, login, logout) and basic Role-Based Access Control (RBAC) using JWTs in HTTP-only cookies, bcrypt for password hashing, and SQLite for data persistence. This creates a secure, resilient, and locally testable auth scaffold.

## Technical Context

**Language/Version**: Node.js 22.x, React 19  
**Primary Dependencies**: Express, bcryptjs, jsonwebtoken, better-sqlite3, cookie-parser (Backend) | React Router DOM (Frontend)  
**Storage**: SQLite local database  
**Testing**: Jest / Supertest (Backend)  
**Target Platform**: Web Browsers  
**Project Type**: Full-stack Web Application  
**Constraints**: Must be easy to run locally with no heavy external dependencies (Docker/Postgres).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Simplicity**: Yes, using JWT in cookies and SQLite keeps the scaffolding incredibly simple to run locally without infrastructure.
- **Invalid Actions**: Validation rules prevent bad emails/passwords; RBAC prevents unauthorized actions.
- **Feedback**: Yes, exact 400/401 HTTP codes returned, and the frontend will display clear messages.
- **Data Consistency**: Yes, SQLite enforces unique constraints on emails.
- **Testability**: Yes, API endpoints can easily be tested via Supertest since the DB is a local SQLite file.
- **Modularity**: Yes, auth concerns will be isolated in specific controllers and middleware.

## Project Structure

### Documentation (this feature)

```text
specs/002-auth-and-rbac/
├── plan.md              # This file
├── research.md          # Technology decisions
├── data-model.md        # User entity and roles
├── quickstart.md        # How to run
├── contracts/           # API endpoints
│   └── api-auth.md
└── tasks.md             # To be generated
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   │   └── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── rbacMiddleware.js
│   ├── models/
│   │   └── userModel.js
│   └── db/
│       └── setup.js
└── tests/
    └── auth.test.js

frontend/
├── src/
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── services/
│       └── authService.js
```

**Structure Decision**: Standard full stack web application tiered architecture. Isolated middleware for RBAC maps directly to Express route handlers, keeping cross-cutting concerns separate from business logic.
