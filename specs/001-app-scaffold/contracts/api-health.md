# Contract: Health Endpoint

**Path**: `GET /api/health`
**Purpose**: System verification, operational monitoring, and ensuring initial Frontend-to-Backend connectivity.

## Request
No query parameters or authentication required.

## Response (200 OK)
```json
{
  "status": "ok",
  "timestamp": "2026-04-05T00:00:00.000Z",
  "version": "1.0.0"
}
```
