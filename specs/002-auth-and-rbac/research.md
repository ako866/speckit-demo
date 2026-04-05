# Research: Authentication and RBAC

## Topic 1: Authentication Strategy
- **Decision**: JSON Web Tokens (JWT) stored in HTTP-only cookies.
- **Rationale**: JWT is stateless, scaling easily. Keeping it in an HTTP-only cookie protects against XSS attacks compared to storing it in `localStorage`.
- **Alternatives considered**: Server-side sessions (Redis/In-memory). Rejected because it requires additional backend infrastructure and state management, increasing complexity.

## Topic 2: Password Hashing
- **Decision**: `bcryptjs`
- **Rationale**: Standard, well-tested, easy to implement in Node.js without requiring native C++ build tools (unlike `bcrypt` or `argon2`).
- **Alternatives considered**: `argon2`, which is technically superior but requires native compilation which can sometimes fail on different operating systems during scaffolding.

## Topic 3: Database Storage
- **Decision**: SQLite (via `better-sqlite3`).
- **Rationale**: Requires zero external services to run, fitting perfectly with a fast "scaffold" that users can locally test immediately without setting up Docker or PostgreSQL.
- **Alternatives considered**: PostgreSQL. Better for production, but heavier for a quick local start. We can design the data access to be easily swappable later.
