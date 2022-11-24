import { MenuItem } from "@mui/material";
import { RHFInputProps } from "../interfaces";
import { Controller } from "react-hook-form";
import { CustomSelect, CustomInputLabel } from "./customComponents";

// Store call instead
const schoolbooks = [
  {
    id: 1,
    label: "Schoolbook 1",
    value: "1",
  },
  {
    id: 2,
    label: "Schoolbook 2",
    value: "2",
  },
];

const SchoolbookSelect = ({ label, name, control }: RHFInputProps) => {
  const generateSelectOptions = () => {
    return schoolbooks.map((schoolbook) => {
      return (
        <MenuItem key={schoolbook.value} value={JSON.stringify(schoolbook)}>
          {schoolbook.label}
        </MenuItem>
      );
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <CustomInputLabel>{label}</CustomInputLabel>
          <CustomSelect onChange={onChange} value={value}>
            {generateSelectOptions()}
          </CustomSelect>
        </>
      )}
    />
  );
};

export default SchoolbookSelect;
