/*
These types are defined by the app store, and likely used throughout the
higher-level layers of the stack. If we had a ./types/ module, this would
be there, but for the reference implementation, we'll leave this with their
natural origins (the service layer).
*/

export interface Error {
  message: string,
  code: number
}

export interface User {
  login: string;
  fullName: string;
}
