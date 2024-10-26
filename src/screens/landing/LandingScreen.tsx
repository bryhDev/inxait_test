import React from "react";
import styles from "./landingStyles.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import autoImage from "../../../public/auto.webp";

const montserratBold = Montserrat({
  weight: "800",
  style: "normal",
  subsets: ["latin"],
});

function LandingScreen() {
  return (
    <section className={`${styles.container}`}>
      <h1>¡Participa y Gana con Bogotá Motors!</h1>

      <article className={`${styles.information}`}>
        <h3>Únete al sorteo exclusivo y gana increíbles premios</h3>
        <Image
          src={autoImage}
          alt="auto"
          width={900}
          height={700}
          placeholder="blur"
        />
        <p>
          {`Regístrate ahora para obtener tu código único de participación,
          tendrás la oportunidad de ganar un auto de lujo.
           No te lo pierdas,`}{" "}
          <b className={`${styles.importanInformation}`}>¡es fácil y rápido!</b>
        </p>
        <Link href={"register"}>
          <button className={`${styles.btnGrad} ${montserratBold.className}`}>
            ¡Regístrate aquí!
          </button>
        </Link>
      </article>
    </section>
  );
}

export default LandingScreen;
