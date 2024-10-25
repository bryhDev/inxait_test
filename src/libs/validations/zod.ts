import { boolean, object, string, number, ZodIssueCode } from "zod";
import departments from "../masterData/dep.json";
import municipalities from "../masterData/mun.json";

const departmentsXMunicipalities = departments.map((dep) => ({
  ...dep,
  municipalities: municipalities.filter((mun) => mun.department_id == dep.id),
}));

export const registerFormSchema = object({
  nombre: string()
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "El nombre solo puede contener letras y espacios."
    )
    .min(1, "El campo Nombre es obligatorio"),

  apellido: string()
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "El apellido solo puede contener letras y espacios."
    )
    .min(1, "El campo Apellido es obligatorio"),

  cedula: string()
    .regex(/^[0-9]+$/, "La cédula solo puede contener números.")
    .min(1, "El campo Cédula es obligatorio"),

  departamento: number({
    required_error: "Selecciona un departamento válido.",
  }).refine((val) => departments.some((dep) => dep.id === val), {
    message: "Selecciona un departamento válido.",
  }),

  ciudad: number({
    required_error: "Selecciona un municipio válido.",
  }),

  celular: string()
    .regex(/^[0-9]+$/, "El celular solo puede contener números.")
    .min(1, "El campo Celular es obligatorio")
    .min(10, "El numero de celular es invalido")
    .max(10, "El numero de celular es invalido"),

  email: string()
    .email("El correo electrónico debe ser válido.")
    .min(1, "El campo Correo Electrónico es obligatorio"),

  habeasData: boolean({
    required_error: "Debe autorizar el tratamiento de sus datos.",
  }).refine((val) => val.valueOf() === true, {
    message: "Debe autorizar el tratamiento de sus datos.",
  }),
}).superRefine((data, ctx) => {
  const selectedDepartment = departmentsXMunicipalities.find(
    (dep) => dep.id === data.departamento
  );
  if (!selectedDepartment) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["departamento"],
      message: "Selecciona un departamento válido.",
    });
  } else if (
    !selectedDepartment?.municipalities.some(
      (mun) => mun.department_id === data.departamento
    )
  ) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      path: ["ciudad"],
      message:
        "Selecciona una ciudad válida para el departamento seleccionado.",
    });
  }
});
