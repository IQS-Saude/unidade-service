import { DomainEvent } from '@/domain/events/domain.event';

export class Entity<T> {
  private _domainEvents: Array<DomainEvent>;

  private _id?: number;

  protected props: T;

  constructor(props: T, id?: number) {
    this.props = props;

    this._id = id;
    this.clearDomainEvents();
  }

  public getId(): number {
    return this._id;
  }

  public isTransient(): boolean {
    return this.getId() !== undefined;
  }

  public equals(left: Entity<T>, right: Entity<T>): boolean {
    for (const objectKey in Object.keys(left)) {
      if (left[objectKey] !== right[objectKey]) {
        return false;
      }
    }

    return true;
  }

  addDomainEvents(event: DomainEvent): void {
    if (this._domainEvents === undefined) {
      this._domainEvents = [];
    }

    this._domainEvents.push(event);
  }

  getDomainEvents(): Array<DomainEvent> {
    return this._domainEvents;
  }

  clearDomainEvents(): void {
    this._domainEvents = [];
  }
}
