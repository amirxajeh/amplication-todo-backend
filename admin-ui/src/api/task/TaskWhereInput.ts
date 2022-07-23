import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  completed?: BooleanFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  uid?: UserWhereUniqueInput;
};
