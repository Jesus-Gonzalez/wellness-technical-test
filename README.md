# Prueba Técnica para desarrollador FrontEnd

## Descripcion
- Desarrollar una aplicación que registre datos de facturación eléctrica, con las siguientes instrucciones:

### Obligatorio
- Importar valores desde un fichero CSV, con columnas y datos ficticios, y almacenarlo en BBDD (NoSQL)
- Backend NodeJS: encargado de importar los datos y exponerlos en una API que permita hacer operaciones CRUD sobre los datos
- Frontend Angular / React / Vue.JS: encargado de consumir la API anterior y presentar los datos en una tabla, y realizar las operaciones CRUD desde la misma
- Subirla a GitHub
- Emplear npm para la paquetería, con los dos siguientes comandos:
- npm run start
- npm run test (si los tiene)
- otros (opcionales)
- Incluir un archivo README.md en el repositorio con las instrucciones necesarias para ejecutar el proyecto.

### Opcional
- Emplear algún stack conocido MEAN, MERN, etc
- Maquetación a elegir, preferiblemente AntDesign o Bootstrap
- Mecanismos de generación y carga de datos, uso de alguna librería de representación gráfica.
- Tests unitarios.

## Tecnologia aplicada
- cliente
  - html/scss
  - javascript (esnext) - standard style
  - create-react-app
  - react (latest)
  - react hooks
  - redux
  - react-redux
  - react-router
  - redux-saga
  - redux-form
  - axios
  - moment
  - c3js
  - datepicker
  - toasts

- servidor
  - node
  - javascript (esnext (babel-register)) - standard style
  - express
  - mongoose

## Requisitos
- node y npm/yarn
- mongodb

## Instalacion
- ejecutando `mongodb` sobre el puerto `27017`
- instalar las dependencias del proyecto: ejecutando `npm i` sobre el directorio raiz

## Comandos Disponibles
- ejecutar aplicacion: `npm start`: se ejecuta bajo el puerto `3000` en `localhost`
- lintear aplcacion: `npm lint`
- correr tests: `npm test`

## Infraestructura
- la aplicacion cliente se ejecuta sobre el puerto `3000`
- la aplicacion servidor se ejecuta sobre el puerto `4000`
- las peticiones de cliente a servidor se lanzan sobre el puerto `3000`,
  siendo `create-react-app` quien crea un proxy en las peticiones del `3000` al `4000`

## Testing
- se ha realizado el testing unitario de solo 1 componente de cada clase
  a modo de demostracion, ya que el tiempo para realizar la prueba es limitado

## Informacion Adicional

- se ha implementado una metodologia distinta en cada pagina (gestion del estado y funcionalidad):
  - import: react hooks solamente
  - chart: react-redux y redux-saga solamente
  - table:
    - combina react hooks y redux-saga para peticiones asincronas
    - redux-form para el formulario de crear consumo

## Autor

Jesus Gonzalez - jesus.gonzalez.eu@gmail.com - Mayo 2020
