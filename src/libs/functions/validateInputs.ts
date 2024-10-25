export const numericValidation = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value.replace(/[^0-9/]/g, "");
  e.currentTarget.value = value;
};
export const namesValidation = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value
    .replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/g, "")
    .replace(/\s{2,}/g, " ");
  e.currentTarget.value = value;
};
