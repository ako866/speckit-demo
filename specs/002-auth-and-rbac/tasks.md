# Implementation Tasks: Authentication and Role-Based Access Control

**Feature**: `002-auth-and-rbac`  
**Generated**: 2026-04-05

## Implementation Strategy
- **MVP**: Complete User Story 1 & 2 first (allows full end-to-end user authentication flow).
- **Incremental Delivery**: RBAC (Story 3) will be layered onto the working authentication mechanism.

## Dependencies Tracker
- `[US2]` strictly depends on `[US1]` for providing user accounts in the database.
- `[US3]` strictly depends on `[US1]` and `[US2]` for providing the auth mechanism and roles.

---

## Phase 1: Setup

- [x] T001 Install backend dependencies (better-sqlite3, bcryptjs, jsonwebtoken, cookie-parser) in `backend/package.json`
- [x] T002 Initialize sqlite database setup utility in `backend/src/db/setup.js`
- [x] T003 Set up backend environment variables config template in `backend/.env.example`

## Phase 2: Foundational

- [x] T004 Create centralized error handling utility for the backend in `backend/src/utils/errors.js`
- [x] T005 Create database init script to scaffold user tables in `backend/src/db/init.js`
- [x] T006 [P] Add frontend Auth context stub in `frontend/src/context/AuthContext.jsx`

## Phase 3: User Signup and Registration [US1]
**Goal**: Allow new users to register for an account using their email address and password.
**Independent Test Criteria**: User can successfully register, database reflects new record with hashed password, frontend redirects to login.

- [x] T007 [US1] Create the User Model containing registration data access methods in `backend/src/models/userModel.js`
- [x] T008 [P] [US1] Create registration API endpoint (`POST /api/auth/register`) and validation in `backend/src/api/authController.js`
- [x] T009 [P] [US1] Integrate register endpoint into backend routing in `backend/src/app.js`
- [x] T010 [P] [US1] Scaffold frontend Register UI component in `frontend/src/pages/Register.jsx`
- [x] T011 [US1] Wire frontend Register form to call backend API in `frontend/src/services/authService.js`
- [x] T012 [US1] Update frontend Auth context to handle registration state in `frontend/src/context/AuthContext.jsx`

## Phase 4: User Login and Session Management [US2]
**Goal**: Allow registered users to log in securely and log out.
**Independent Test Criteria**: User logs in with valid credentials, receives HTTP-only JWT cookie, session persists upon refresh, logout clears cookie.

- [x] T013 [US2] Create login model lookup method (find by email) in `backend/src/models/userModel.js`
- [x] T014 [US2] Implement login API endpoint (`POST /api/auth/login`) with bcrypt and JWT in `backend/src/api/authController.js`
- [x] T015 [US2] Implement logout endpoint (`POST /api/auth/logout`) to clear cookies in `backend/src/api/authController.js`
- [x] T016 [US2] Implement user validation endpoint (`GET /api/auth/me`) in `backend/src/api/authController.js`
- [x] T017 [P] [US2] Setup `authMiddleware` to parse and validate JWT cookies in `backend/src/middleware/authMiddleware.js`
- [x] T018 [P] [US2] Scaffold frontend Login UI component in `frontend/src/pages/Login.jsx`
- [x] T019 [US2] Implement frontend auth API calls (login, logout, fetchMe) in `frontend/src/services/authService.js`
- [x] T020 [US2] Enhance frontend Auth Context to persist global authenticated user state in `frontend/src/context/AuthContext.jsx`

## Phase 5: Role-Based Access Control (RBAC) [US3]
**Goal**: Protect routes and actions based on user roles.
**Independent Test Criteria**: Non-admin users are blocked from admin routes. Admin users access their routes successfully. Unauthenticated users are sent to login.

- [x] T021 [US3] Implement `rbacMiddleware` that accepts role parameters in `backend/src/middleware/rbacMiddleware.js`
- [x] T022 [US3] Apply RBAC and Auth middleware to protect example test endpoints in `backend/src/app.js`
- [x] T023 [P] [US3] Create a protected frontend component (`PrivateRoute`) that enforces user presence and roles in `frontend/src/components/PrivateRoute.jsx`
- [x] T024 [P] [US3] Wrap protected views in the router using the `PrivateRoute` wrapper in `frontend/src/App.jsx`

## Final Phase: Polish & Cross-Cutting Concerns

- [x] T025 [P] Improve frontend UI form validation and error message rendering across Login/Register pages.
- [x] T026 [P] Ensure backend returns standardized JSON responses across all auth endpoints.
