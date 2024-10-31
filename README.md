This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pagina para prueba de inxait

el proyecto se puede almacenar en un docker usando el comando

```bash
 docker build -t inxait-test .
```

O puede usar

```bash
npm i --force
# or
yarn install

```

Y después

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Para usar el modo desarrollador

## Aplicación y uso

Esta aplicación se creo con el fin de mostrar conocimientos sobre desarrollo web y Nextjs.

Es un ejemplo de un landing para un concurso de una empresa de autos, para la practica el nombre de la empresa es "Bogota motors",
hace uso que artificialmente simula la obtención de información de un usuario.

## Enunciado

Una compañía importante de automóviles va a realizar un sitio promocional para recolección de datos de clientes actuales de la marca en Bogotá. El concurso consiste en que el usuario se registre en una Landing page y al completar su registro se le deberá crear un código alfanumérico para participar en un sorteo.
Características funcionales:
● Nombre: Campo alfabético, restringido a otros caracteres (Dato Obligatorio)
● Apellido: Campo alfabético, restringido a otros caracteres (Dato Obligatorio)
● Cédula: Campo numérico, restringido a otros caracteres (Dato Obligatorio)
● Departamento (Obligatorio): Menú desplegable con la lista de departamentos de Colombia
● Ciudad (Obligatorio): Menú desplegable dependiente del departamento anteriormente elegido
● Celular: Campo numérico, restringido a otros caracteres (Dato Obligatorio)
● Correo Electrónico: Campo alfanumérico restringido a otros caracteres (Obligatorio el @)
● Campo Habeas Data (“Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la política de protección de datos personales”. Haga clic aquí)
● Debe contar con mínimo 2 visuales (formulario de captura de datos, registro completado con código generado)
● No es necesario que se almacenen los datos.
● Se debe entregar con un docker compose configurado para poder levantar el proyecto.
