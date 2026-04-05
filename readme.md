Users can view and book meeting rooms based on availability.

- View rooms with capacity and equipment
- Filter rooms by capacity, equipment, and time
- Select a time slot and book a room
- System must prevent double booking
- Users can cancel bookings
- Users can view upcoming and past bookings

Constraints:
- Booking must not overlap with existing bookings
- End time must be after start time
- Users cannot book past time slots
- Only booking owner can cancel


Should the system allow overlapping bookings for the same room, or strictly prevent them?


plan


Frontend:
- React UI for room list and booking form

Backend:
- Node JS APIs for booking

Database:
- Store rooms and bookings

Core Logic:
- Availability checking
- Conflict detection for overlapping bookings
- Booking state management
