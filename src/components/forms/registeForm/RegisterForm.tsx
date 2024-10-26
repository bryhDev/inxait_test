"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./registerForm.module.css";
import { TRegisterForm } from "@/types/typesForms";
import { Controller, UseFormReturn } from "react-hook-form";

import { Checkbox, Input, Select } from "antd";
import { randomBytes } from "crypto";
import departmentsJson from "../../../libs/masterData/dep.json";
import municipalitiesJson from "../../../libs/masterData/mun.json";
import {
  namesValidation,
  numericValidation,
} from "@/libs/functions/validateInputs";
import Link from "next/link";

interface IRegisterFormProps {
  useFormRegister: UseFormReturn<TRegisterForm>;
  changeCode?: React.Dispatch<React.SetStateAction<string>>;
}

function RegisterForm({ useFormRegister, changeCode }: IRegisterFormProps) {
  const [errorRegister, setErrorRegister] = useState("");
  const [departments] = useState(departmentsJson);
  const [municipalities] = useState(municipalitiesJson);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormRegister;
  useEffect(() => {
    let errorTimeout = null;
    if (errorRegister) {
      errorTimeout = setTimeout(() => {
        setErrorRegister("");
      }, 3000);
    }
    return () => {
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
    };
  }, [errorRegister]);
  const onSubmit = async (registerForm: TRegisterForm) => {
    const code = randomBytes(4).toString("hex").toUpperCase();
    console.log(registerForm);
    if (changeCode) {
      changeCode(code);
    }
  };
  const departmentItems = useMemo(
    () => departments.map((dep) => ({ value: dep.id, label: dep.name })),
    [departments]
  );
  const municipalitiesItems = useMemo(
    () =>
      municipalities
        .filter((mun) => mun.department_id === watch("departamento"))
        .map((mun) => ({ value: mun.id, label: mun.name })),
    [municipalities, watch]
  );
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.formContainer}`}
    >
      <div className={`${styles.labelsContainer}`}>
        <div className={`${styles.groupLabel}`}>
          <label className={`${styles.minimalLabel}`}>
            <p>Nombre:</p>
            <Controller
              control={control}
              name="nombre"
              render={({ field }) => (
                <Input
                  {...field}
                  status={errors.nombre ? "error" : undefined}
                  placeholder="John"
                  onInput={namesValidation}
                />
              )}
            />
            {errors.nombre ? (
              <p className={`${styles.error}`}>{errors.nombre.message}</p>
            ) : null}
          </label>
          <label className={`${styles.minimalLabel}`}>
            <p>Apellido:</p>
            <Controller
              control={control}
              name="apellido"
              render={({ field }) => (
                <Input
                  {...field}
                  status={errors.email ? "error" : undefined}
                  placeholder="Doe"
                  onInput={namesValidation}
                />
              )}
            />
            {errors.apellido ? (
              <p className={`${styles.error}`}>{errors.apellido.message}</p>
            ) : null}
          </label>
        </div>
        <label>
          <p>Cédula:</p>
          <Controller
            control={control}
            name="cedula"
            render={({ field }) => (
              <Input
                {...field}
                status={errors.cedula ? "error" : undefined}
                placeholder="1072000000"
                onInput={numericValidation}
              />
            )}
          />
          {errors.cedula ? (
            <p className={`${styles.error}`}>{errors.cedula.message}</p>
          ) : null}
        </label>
        <label>
          <p>Email:</p>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                status={errors.email ? "error" : undefined}
                placeholder="ejemplo@dominio.com"
              />
            )}
          />
          {errors.email ? (
            <p className={`${styles.error}`}>{errors.email.message}</p>
          ) : null}
        </label>
        <label>
          <p>Celular:</p>
          <Controller
            control={control}
            name="celular"
            render={({ field }) => (
              <Input
                {...field}
                status={errors.celular ? "error" : undefined}
                placeholder="3200000000"
                onInput={numericValidation}
              />
            )}
          />
          {errors.celular ? (
            <p className={`${styles.error}`}>{errors.celular.message}</p>
          ) : null}
        </label>
        <div className={`${styles.groupLabel}`}>
          <label className={`${styles.minimalLabel}`}>
            <p>Departamento:</p>
            <Controller
              control={control}
              name="departamento"
              render={({ field }) => (
                <Select
                  style={{ width: 220 }}
                  showSearch
                  {...field}
                  options={departmentItems}
                  optionFilterProp="label"
                  optionLabelProp="label"
                  placeholder="Seleccione un departamento"
                />
              )}
            />
            {errors.departamento ? (
              <p className={`${styles.error}`}>{errors.departamento.message}</p>
            ) : null}
          </label>
          <label className={`${styles.minimalLabel}`}>
            <p>Municipio:</p>
            <Controller
              control={control}
              name="ciudad"
              render={({ field }) => (
                <Select
                  showSearch
                  style={{ width: 220 }}
                  {...field}
                  options={municipalitiesItems}
                  optionLabelProp="label"
                  optionFilterProp="label"
                  placeholder="Seleccione un municipio"
                />
              )}
            />
            {errors.ciudad ? (
              <p className={`${styles.error}`}>{errors.ciudad.message}</p>
            ) : null}
          </label>
        </div>
      </div>
      <label className={`${styles.habeasDataLabel}`}>
        <Controller
          control={control}
          name="habeasData"
          render={({ field }) => (
            <>
              <Checkbox {...field} checked={field.value}>
                Acepto
              </Checkbox>
              <Link className={`${styles.linkTerms}`} href={"terms&conditions"}>
                términos y condiciones
              </Link>
            </>
          )}
        />
        {errors.habeasData ? (
          <p className={`${styles.error}`}>{errors.habeasData.message}</p>
        ) : null}
      </label>
      <button className={`${styles.btnSend}`}>Enviar</button>
    </form>
  );
}

export default RegisterForm;
