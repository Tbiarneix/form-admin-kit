import { Control, FieldErrorsImpl, FieldValues } from "react-hook-form";

export interface RegisterFormProps {
  nameValue: string;
  emailValue: string;
  passwordValue: string;
  confirmPasswordValue: string;
  schoolbookValue?: SchoolbookProps;
  schoolbookMultiValue?: SchoolbookProps[];
}

export interface SchoolbookProps {
  id: number;
  label: string;
  value: string;
}

export interface RHFInputProps {
  label: string;
  name: string;
  control: Control<FieldValues, any>;
  errors: Partial<
    FieldErrorsImpl<{
      nameValue: string;
      emailValue: string;
      passwordValue: string;
      confirmPasswordValue: string;
      schoolbookValue: {};
    }>
  >;
}
