import Link from "next/link";
import styles from "./TermsConditionsStyles.module.css";
function TermsConditionsScreen() {
  return (
    <section className={`${styles.container}`}>
      <h1>Términos y Condiciones del Concurso de Bogotá Motors</h1>
      <section className={`${styles.informationContainer}`}>
        <h2 className={`${styles.titles}`}>
          1. Aceptación de los Términos y Condiciones
        </h2>
        <p>
          Al registrarte en nuestro concurso y participar en la página de Bogotá
          Motors, aceptas estos Términos y Condiciones. Si no estás de acuerdo
          con alguno de estos términos, no podrás participar en el concurso.
        </p>

        <h2>2. Organización del Concurso</h2>
        <p>
          Este concurso es organizado por Bogotá Motors y tiene como objetivo
          promover la interacción con nuestros clientes en toda Colombia. La
          participación es completamente gratuita y no implica ninguna compra de
          productos o servicios.
        </p>

        <h2>3. Requisitos de Participación</h2>
        <p>
          - Ser mayor de 18 años.
          <br />
          - Residir en Colombia.
          <br />- Completar el formulario de registro con información veraz y
          actualizada.
        </p>

        <h2>4. Mecánica del Concurso</h2>
        <p>
          Los participantes deben completar el formulario en la página de
          registro y obtener un código de participación único. Solo se permite
          una participación por persona. Cualquier intento de duplicar
          participaciones resultará en la descalificación del participante.
        </p>

        <h2>5. Premios</h2>
        <p>
          Los premios ofrecidos están descritos en la página del concurso y
          podrán incluir productos de Bogotá Motors o beneficios exclusivos. Los
          ganadores serán seleccionados aleatoriamente y anunciados en la fecha
          indicada en la página del concurso.
        </p>

        <h2>6. Notificación de los Ganadores</h2>
        <p>
          Los ganadores serán notificados a través del correo electrónico
          registrado en el formulario. Los ganadores deberán presentar el código
          de participación y una identificación válida para reclamar el premio.
          Si el ganador no puede ser contactado o no responde dentro de los 10
          días hábiles posteriores al contacto, perderá el derecho al premio.
        </p>

        <h2>7. Protección de Datos Personales</h2>
        <p>
          Bogotá Motors se compromete a proteger los datos personales de los
          participantes. La información proporcionada en el formulario de
          registro será utilizada únicamente para fines de gestión del concurso
          y de acuerdo con nuestra política de privacidad. Los participantes
          pueden solicitar la eliminación de sus datos personales en cualquier
          momento enviando una solicitud a nuestro correo de contacto.
        </p>

        <h2>8. Uso de Imagen y Publicidad</h2>
        <p>
          Al participar, el ganador autoriza a Bogotá Motors a utilizar su
          nombre e imagen en materiales promocionales, sin costo adicional y sin
          límite de tiempo, en medios de comunicación y redes sociales.
        </p>

        <h2>9. Modificaciones y Cancelación</h2>
        <p>
          Bogotá Motors se reserva el derecho de modificar, suspender o cancelar
          el concurso en cualquier momento, sin previo aviso, por causas
          justificadas.
        </p>

        <h2>10. Limitación de Responsabilidad</h2>
        <p>
          Bogotá Motors no se hace responsable por cualquier fallo técnico o
          problema que impida la participación en el concurso. La empresa no se
          responsabiliza por demoras o problemas ajenos a su control que puedan
          afectar la entrega de los premios.
        </p>

        <h2>11. Jurisdicción y Ley Aplicable</h2>
        <p>
          Este concurso se rige por las leyes vigentes en Colombia y cualquier
          conflicto derivado de estos términos será resuelto en los tribunales
          correspondientes.
        </p>
      </section>
      <Link className={`${styles.btnBack}`} href={"register"}>
        Volver
      </Link>
    </section>
  );
}

export default TermsConditionsScreen;
