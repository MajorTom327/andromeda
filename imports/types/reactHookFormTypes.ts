import { DeepMap, FieldValues, Message, MultipleFieldErrors, Ref } from "react-hook-form";

export type TFieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export type TFieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, TFieldError>;