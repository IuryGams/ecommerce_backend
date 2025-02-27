import { TokenParams } from "./auth";

declare global {
  namespace Express {
    export interface Request {
      user: TokenParams;
    }
  }
}