import { User } from "../user/User";

export type Task = {
  completed: boolean;
  createdAt: Date;
  id: string;
  text: string | null;
  uid?: User | null;
  updatedAt: Date;
};
