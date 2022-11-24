import { RHFInputProps } from "../interfaces";
import { Controller } from "react-hook-form";
import { CustomTextField, CustomInputLabel } from "./customComponents";

const ConfirmPasswordInput = ({
  label,
  name,
  control,
  errors,
}: RHFInputProps) => {
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
            error={!!formState.errors?.confirmPasswordValue}
            helperText={errors ? errors.confirmPasswordValue?.message : null}
            type="password"
          />
        </>
      )}
    />
  );
};

export default ConfirmPasswordInput;
