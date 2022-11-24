import { Controller } from "react-hook-form";
import { RHFInputProps } from "../interfaces";
import { CustomTextField, CustomInputLabel } from "./customComponents";

const PasswordInput = ({ label, name, control, errors }: RHFInputProps) => {
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
            error={!!formState.errors?.passwordlValue}
            helperText={errors ? errors.passwordValue?.message : null}
            type="password"
          />
        </>
      )}
    />
  );
};

export default PasswordInput;
