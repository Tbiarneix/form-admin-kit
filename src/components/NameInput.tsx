import { Controller } from "react-hook-form";
import { RHFInputProps } from "../interfaces";
import { CustomTextField, CustomInputLabel } from "./customComponents";

const NameInput = ({ label, name, control, errors }: RHFInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Name required" }}
      render={({ field: { onChange, value }, formState }) => (
        <>
          <CustomInputLabel>{label}</CustomInputLabel>
          <CustomTextField
            onChange={onChange}
            value={value}
            error={!!formState.errors?.nameValue}
            helperText={errors ? errors.nameValue?.message : null}
          />
        </>
      )}
    />
  );
};

export default NameInput;
