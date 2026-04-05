# Tasks: Basic Application Structure

**Input**: Design documents from `/specs/001-app-scaffold/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are MANDATORY per Constitution Principle V (Testable and Handle Edge Cases). All features must be tested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize React project frontend with Tailwind in `frontend/`
- [x] T002 Initialize NodeJS project backend with Express in `backend/`
- [x] T003 [P] Configure shared linting tools at root `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Setup basic Express structure in `backend/src/server.js` and `backend/src/app.js`
- [x] T005 [P] Setup React core and React Router in `frontend/src/App.js`
- [x] T006 Configure Tailwind CSS in `frontend/tailwind.config.js` and `frontend/src/index.css`
- [x] T007 Scaffold generic components and layout directories in `frontend/src/components/layout/`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Basic Homepage (Priority: P1) 🎯 MVP

**Goal**: Establish the fundamental layout and entry point of the application scaffold.

**Independent Test**: Root URL serves the standard application header and homepage content.

### Tests for User Story 1 (MANDATORY) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T008 [P] [US1] Write test for app routing and layout rendering in `frontend/src/App.test.js`

### Implementation for User Story 1

- [x] T009 [US1] Create consistent Layout component (header + content) in `frontend/src/components/layout/Layout.js`
- [x] T010 [P] [US1] Create Homepage component in `frontend/src/pages/Home/Home.js`
- [x] T011 [US1] Connect Layout and Home components to base route in `frontend/src/App.js`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Meeting Rooms Placeholder (Priority: P2)

**Goal**: Ensure multi-page routing is functional within the consistent layout.

**Independent Test**: User can navigate to the meeting rooms route and see the placeholder page cleanly integrated.

### Tests for User Story 2 (MANDATORY) ⚠️

- [x] T012 [P] [US2] Write routing test for Meeting Rooms page rendering in `frontend/src/App.test.js`

### Implementation for User Story 2

- [x] T013 [US2] Create meeting rooms placeholder component in `frontend/src/pages/MeetingRooms/MeetingRooms.js`
- [x] T014 [P] [US2] Update Layout/Header with navigation link to meeting rooms in `frontend/src/components/layout/Header.js`
- [x] T015 [US2] Add `/meeting-rooms` route to router config in `frontend/src/App.js`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Verify Health Endpoint & Backend Communication (Priority: P3)

**Goal**: Establish end-to-end communication from the frontend to the backend health endpoint.

**Independent Test**: Health endpoint returns 200 OK, and frontend visibly succeeds in retrieving it upon load.

### Tests for User Story 3 (MANDATORY) ⚠️

- [x] T016 [P] [US3] Write endpoint contract test for GET `/api/health` in `backend/tests/integration/health.test.js`
- [x] T017 [P] [US3] Write frontend test simulating backend health fetch in `frontend/src/services/api.test.js`

### Implementation for User Story 3

- [x] T018 [US3] Create health API endpoint controller in `backend/src/controllers/healthController.js`
- [x] T019 [US3] Register `/api/health` route in `backend/src/routes/api.js` and link to `app.js`
- [x] T020 [P] [US3] Create API service function for health check in `frontend/src/services/api.js`
- [x] T021 [US3] Connect frontend with backend API on homepage load in `frontend/src/pages/Home/Home.js`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T022 [P] Run start scripts per `quickstart.md` to ensure frontend/backend startup smoothly
- [x] T023 Code cleanup, formatting consistency, and console.log removals across all directories

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Sequential priority order (P1 → P2 → P3) or parallel if independent.

### User Story Dependencies
- **User Story 1 (P1)**: Independent MVP
- **User Story 2 (P2)**: Dependent on US1 (Layout container)
- **User Story 3 (P3)**: Mostly independent (backend), but connects frontend to backend in US1's Home component.

### Parallel Opportunities
- Initialization of Node and React projects (T001, T002) can run parallel.
- Basic Express and React Foundational setups (T004, T005, T006) can run parallel.
- Tests within User Stories can run parallel to scaffolding models or UI blocks beforehand.
- The Backend Health Endpoint (T018, T019) can be built completely in parallel with the Frontend API service (T020).

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery
1. Add User Story 2 → Test independently
2. Add User Story 3 (Full Stack connection) → Test independently
