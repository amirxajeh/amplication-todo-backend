import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  completed?: boolean;
  text?: string | null;
  uid?: UserWhereUniqueInput | null;
};
