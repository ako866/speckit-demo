# Data Model: Authentication & RBAC

## Entities

### User
- `id` (INTEGER, Primary Key, Auto-increment)
- `email` (TEXT, Unique, Required)
- `passwordHash` (TEXT, Required)
- `role` (TEXT, Required, Default: 'USER')
- `createdAt` (DATETIME, Default: CURRENT_TIMESTAMP)

### Role (Logical)
- Currently implemented as a simple string on the User object ('ADMIN', 'USER') to reduce relational complexity for V1.

## Validation Rules
- Email: Must be valid format.
- Password: Minimum 8 characters during signup (the hash is stored, not the plain text).
- Role Enum: MUST be 'ADMIN' or 'USER'.
