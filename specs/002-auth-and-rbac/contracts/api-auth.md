# API Contracts: Auth & RBAC

## `POST /api/auth/register`
- **Request**: `{ "email": "user@example.com", "password": "securepassword123" }`
- **Response (201)**: `{ "id": 1, "email": "user@example.com", "role": "USER" }`
- **Response (400)**: `{ "error": "Invalid email or weak password" }`

## `POST /api/auth/login`
- **Request**: `{ "email": "user@example.com", "password": "securepassword123" }`
- **Response (200)**: Sets `Set-Cookie: token=JWT...; HttpOnly; Path=/` and returns `{ "message": "Logged in", "user": { "id": 1, "email": "user@example.com", "role": "USER" } }`
- **Response (401)**: `{ "error": "Invalid credentials" }`

## `POST /api/auth/logout`
- **Request**: Empty
- **Response (200)**: Clears auth Cookie. `{ "message": "Logged out" }`

## `GET /api/auth/me`
- **Request**: Includes Auth Cookie
- **Response (200)**: `{ "id": 1, "email": "user@example.com", "role": "USER" }`
- **Response (401)**: `{ "error": "Not authenticated" }`
