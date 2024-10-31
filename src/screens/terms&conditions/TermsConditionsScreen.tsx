import Link from "next/link";
import styles from "./TermsConditionsStyles.module.css";
import OrderListItemText from "@/components/orderListItem/OrderListItemText";
const termsAndConditions = [
  {
    subtitle: "1. Aceptación de los Términos y Condiciones",
    text: "Al registrarte en nuestro concurso y participar en la página de Bogotá Motors, aceptas estos Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, no podrás participar en el concurso.",
  },
  {
    subtitle: "2. Organización del Concurso",
    text: "Este concurso es organizado por Bogotá Motors y tiene como objetivo promover la interacción con nuestros clientes en toda Colombia. La participación es completamente gratuita y no implica ninguna compra de productos o servicios.",
  },
  {
    subtitle: "3. Requisitos de Participación",
    text: "- Ser mayor de 18 años.\n- Residir en Colombia.\n- Completar el formulario de registro con información veraz y actualizada.",
  },
  {
    subtitle: "4. Mecánica del Concurso",
    text: "Los participantes deben completar el formulario en la página de registro y obtener un código de participación único. Solo se permite una participación por persona. Cualquier intento de duplicar participaciones resultará en la descalificación del participante.",
  },
  {
    subtitle: "5. Premios",
    text: "Los premios ofrecidos están descritos en la página del concurso y podrán incluir productos de Bogotá Motors o beneficios exclusivos. Los ganadores serán seleccionados aleatoriamente y anunciados en la fecha indicada en la página del concurso.",
  },
  {
    subtitle: "6. Notificación de los Ganadores",
    text: "Los ganadores serán notificados a través del correo electrónico registrado en el formulario. Los ganadores deberán presentar el código de participación y una identificación válida para reclamar el premio. Si el ganador no puede ser contactado o no responde dentro de los 10 días hábiles posteriores al contacto, perderá el derecho al premio.",
  },
  {
    subtitle: "7. Protección de Datos Personales",
    text: "Bogotá Motors se compromete a proteger los datos personales de los participantes. La información proporcionada en el formulario de registro será utilizada únicamente para fines de gestión del concurso y de acuerdo con nuestra política de privacidad. Los participantes pueden solicitar la eliminación de sus datos personales en cualquier momento enviando una solicitud a nuestro correo de contacto.",
  },
  {
    subtitle: "8. Uso de Imagen y Publicidad",
    text: "Al participar, el ganador autoriza a Bogotá Motors a utilizar su nombre e imagen en materiales promocionales, sin costo adicional y sin límite de tiempo, en medios de comunicación y redes sociales.",
  },
  {
    subtitle: "9. Modificaciones y Cancelación",
    text: "Bogotá Motors se reserva el derecho de modificar, suspender o cancelar el concurso en cualquier momento, sin previo aviso, por causas justificadas.",
  },
  {
    subtitle: "10. Limitación de Responsabilidad",
    text: "Bogotá Motors no se hace responsable por cualquier fallo técnico o problema que impida la participación en el concurso. La empresa no se responsabiliza por demoras o problemas ajenos a su control que puedan afectar la entrega de los premios.",
  },
  {
    subtitle: "11. Jurisdicción y Ley Aplicable",
    text: "Este concurso se rige por las leyes vigentes en Colombia y cualquier conflicto derivado de estos términos será resuelto en los tribunales correspondientes.",
  },
];
function TermsConditionsScreen() {
  return (
    <section className={`${styles.container}`}>
      <h1>Términos y Condiciones del Concurso de Bogotá Motors</h1>
      <ol className={`${styles.informationContainer}`}>
        {termsAndConditions.map((terms, i) => (
          <OrderListItemText
            key={i}
            subtitle={terms.subtitle}
            text={terms.text}
          />
        ))}
      </ol>
      <Link className={`${styles.btnBack}`} href={"register"}>
        Volver
      </Link>
    </section>
  );
}

export default TermsConditionsScreen;
