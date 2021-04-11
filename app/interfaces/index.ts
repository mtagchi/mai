// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  uid: string,
  displayName: string | null,
  email: string | null,
  photoURL: string | null,
  createdAt?: string
  updateAt: string
}
