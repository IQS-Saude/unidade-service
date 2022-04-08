export abstract class Enumeration {
  private _name: string;
  private _id: number;

  public getName(): string {
    return this._name;
  }

  public getId(): number {
    return this._id;
  }

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
}
