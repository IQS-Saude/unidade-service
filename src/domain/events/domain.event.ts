import { randomUUID } from 'crypto';

export abstract class DomainEvent {
  eventDate: Date;
  correlationId: string;

  constructor() {
    this.eventDate = new Date();
    this.correlationId = randomUUID();
  }
}
