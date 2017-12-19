/*
These types are defined by the webservices / data sources, and are codified
into TS interfaces just to ensure end-to-end type safety. This file could be
generated, if the endpoint supports reflection / codegen.
*/

export interface ApiUser {
  login: string;
  first_name: string;
  last_name: string;
}

export interface ApiResponse {
  response_code: number;
  message: string;
}
