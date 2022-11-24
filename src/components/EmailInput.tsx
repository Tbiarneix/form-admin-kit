import { Controller } from "react-hook-form";
import { RHFInputProps } from "../interfaces";
import { CustomTextField, CustomInputLabel } from "./customComponents";

const EmailInput = ({ label, name, control, errors }: RHFInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, formState }) => (
        <>
          <CustomInputLabel>{label}</CustomInputLabel>
          <CustomTextField
            onChange={onChange}
            value={value}
            error={!!formState.errors?.emailValue}
            helperText={errors ? errors.emailValue?.message : null}
          />
        </>
      )}
    />
  );
};

export default EmailInput;
