import { Info } from "./Info";

export interface ApiResponse<T> {
  results: T;
  info: Info;
}