"use client";
import { Popover } from "antd";
import Link from "next/link";
import Image from "next/image";
import styles from "./congratsStyles.module.css";
import { useEffect, useState } from "react";

interface Props {
  participationCode: string;
}
function CongratsScreen({ participationCode }: Props) {
  const [open, setOpen] = useState(false);
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
    <section className={`${styles.congratsContainer}`}>
      <h2>
        🎉
        <span>
          ¡Felicidades ya estas participando por nuestros increíbles premios!
        </span>
        🎉
      </h2>
      <section className={`${styles.informationContainer}`}>
        <div className={`${styles.codeContainer}`}>
          <p>Tu código de participación es: </p>
          <Popover open={open} content="Copiado">
            <button
              className={`${styles.btnCopy}`}
              onClick={() => {
                navigator.clipboard.writeText(participationCode);
                setOpen(!open);
              }}
            >
              <strong>{participationCode}</strong>
              <Image src={"/copyIcon.svg"} alt="copy" width={20} height={20} />
            </button>
          </Popover>
        </div>
        <p>
          Este código es tu llave para reclamar tu premio. En caso de ser
          seleccionado, necesitarás presentarlo para validar tu participación.
          <b>¡No lo pierdas!</b>
        </p>
      </section>
      <section className={`${styles.shareContainer}`}>
        <p>¡Comparte con tus amigos y aumenta las posibilidades de ganar!🎁</p>
        <button className={`${styles.btnShare}`} onClick={shareOnSocialMedia}>
          Compartir en Redes Sociales
        </button>
        <p>o</p>
        <Link className={`${styles.btnBack}`} href={"/"}>
          Volver
        </Link>
      </section>
    </section>
  );
}

export default CongratsScreen;
