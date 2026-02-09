/**
 * Database Models Export
 * Centralized export point for all Mongoose models
 * 
 * Usage:
 * import { Event, Booking } from '@/database';
 */

export { default as Event } from './event.model';
export { default as Booking } from './booking.model';

// Export TypeScript interfaces for type checking
export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';
