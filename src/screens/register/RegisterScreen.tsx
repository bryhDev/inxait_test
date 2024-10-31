"use client";
import RegisterForm from "@/components/forms/registeForm/RegisterForm";
import React, { useState } from "react";
import styles from "./registerStyles.module.css";
import { useForm } from "react-hook-form";
import { TRegisterForm } from "@/types/typesForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/libs/validations/zod";
import CongratsScreen from "../congratsScreen/CongratsScreen";

function RegisterScreen() {
  const [participationCode, setParticipationCode] = useState("");
  const registerForm = useForm<TRegisterForm>({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      cedula: "",
      celular: "",
      habeasData: false,
    },
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <>
      {!registerForm.formState.isSubmitSuccessful ? (
        <section className={`${styles.formContainer}`}>
          <h1>¡Regístrate y Gana!</h1>
          <RegisterForm
            useFormRegister={registerForm}
            changeCode={setParticipationCode}
          />
        </section>
      ) : (
        <CongratsScreen participationCode={participationCode} />
      )}
    </>
  );
}

export default RegisterScreen;
