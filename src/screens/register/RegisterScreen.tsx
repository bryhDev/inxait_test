"use client";
import RegisterForm from "@/components/forms/registeForm/RegisterForm";
import React, { useEffect, useState } from "react";
import styles from "./registerStyles.module.css";
import { useForm } from "react-hook-form";
import { TRegisterForm } from "@/types/typesForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/libs/validations/zod";
import Image from "next/image";
import { Popover } from "antd";
import Link from "next/link";

function RegisterScreen() {
  const [participationCode, setParticipationCode] = useState("");
  const [open, setOpen] = useState(false);
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
  useEffect(() => {
    let errorTimeout = null;
    if (open) {
      errorTimeout = setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
    return () => {
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
    };
  }, [open]);

  const shareOnSocialMedia = () => {
    const shareData = {
      title: "Bogotá Motors Concurso",
      text: "¡Ya estoy participando en el concurso de Bogotá Motors! Únete y participa por increíbles premios.",
      url: window.location.href,
    };

    navigator
      .share(shareData)
      .catch((err) => console.log("Error al compartir:", err));
  };
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
        <section className={`${styles.congratsContainer}`}>
          <h2>
            🎉
            <span>
              ¡Felicidades ya estas participando por nuestros increíbles
              premios!
            </span>
            🎉
          </h2>
          <section className={`${styles.informationContainer}`}>
            <div className={`${styles.codeContainer}`}>
              <p>Tu código de participación es: </p>
              <Popover open={open} content="copiado">
                <button
                  className={`${styles.btnCopy}`}
                  onClick={() => {
                    navigator.clipboard.writeText(participationCode);
                    setOpen(!open);
                  }}
                >
                  <strong>{participationCode}</strong>
                  <Image
                    src={"/copyIcon.svg"}
                    alt="copy"
                    width={20}
                    height={20}
                  />
                </button>
              </Popover>
            </div>
            <p>
              Este código es tu llave para reclamar tu premio. En caso de ser
              seleccionado, necesitarás presentarlo para validar tu
              participación.
              <b>¡No lo pierdas!</b>
            </p>
          </section>
          <section className={`${styles.shareContainer}`}>
            <p>
              ¡Comparte con tus amigos y aumenta las posibilidades de ganar!🎁
            </p>
            <button
              className={`${styles.btnShare}`}
              onClick={shareOnSocialMedia}
            >
              Compartir en Redes Sociales
            </button>
            <p>o</p>
            <Link className={`${styles.btnBack}`} href={"/"}>
              Volver
            </Link>
          </section>
        </section>
      )}
    </>
  );
}

export default RegisterScreen;
