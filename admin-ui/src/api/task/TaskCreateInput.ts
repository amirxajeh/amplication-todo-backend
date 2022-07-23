import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed: boolean;
  text?: string | null;
  uid?: UserWhereUniqueInput | null;
};
