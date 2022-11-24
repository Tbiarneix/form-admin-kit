import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../registerForm.css";

import { CustomButton } from "./customComponents";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SchoolbookSelect from "./SchoolbookSelect";
import SchoolbookMultiSelect from "./SchoolbookMultiSelect";

yup.setLocale({
  mixed: {
    default: "Champ non valide",
  },
});

const defaultValues = {
  nameValue: "",
  emailValue: "",
  passwordValue: "",
  confirmPasswordValue: "",
  schoolbookValue: {},
  schoolbookMultiValue: [],
};

const schema = yup
  .object({
    nameValue: yup.string().required("Merci de reseigner un nom"),
    emailValue: yup
      .string()
      .email()
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Merci de renseigner une adresse mail valide"
      )
      .required("Merci de renseigner un email"),
    passwordValue: yup
      .string()
      .required("Merci de renseigner un mot de passe")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Le mot de passe doit contenir au moins 8 charactères, dont une majuscule, un chiffre, et un chactère spécial"
      ),
    confirmPasswordValue: yup
      .string()
      .required("Merci de confirmer votre mot de passe")
      .oneOf(
        [yup.ref("passwordValue"), null],
        "Les mots de passe ne correspondent pas."
      ),
  })
  .required();

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // Think to use JSON.parse on data.schoolbookValue to get an object
    // setValue(data)
  };

  return (
    <div className="register-form">
      <NameInput
        label={"Nom*"}
        name={"nameValue"}
        control={control}
        errors={errors}
      />
      <EmailInput
        label={"Email*"}
        name={"emailValue"}
        control={control}
        errors={errors}
      />
      <PasswordInput
        label={"Mot de passe*"}
        name={"passwordValue"}
        control={control}
        errors={errors}
      />
      <ConfirmPasswordInput
        label={"Confirmez votre mot de passe*"}
        name={"confirmPasswordValue"}
        control={control}
        errors={errors}
      />
      <SchoolbookSelect
        label={"Selectionnez un manuel"}
        name={"schoolbookValue"}
        control={control}
        errors={errors}
      />
      <SchoolbookMultiSelect
        label={"Selectionnez un ou plusieurs manuels"}
        name={"schoolbookMultiValue"}
        control={control}
        errors={errors}
      />

      <CustomButton onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Créer un compte
      </CustomButton>
    </div>
  );
};

export default RegisterForm;
