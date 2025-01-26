import { Timestamp } from "@angular/fire/firestore";

export type ColumnKeys<T> = Array<keyof T>;
// Defines a type representing an array of keys from type T.

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: number;
  action: string;
  created: Timestamp;
  updated: Timestamp;
}
