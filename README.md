# CRUD Games-services

Service de la APP de Games, realizado bajo NodeJS-Express

## Pre-requisitos

Para este proyecto se utilizarón las siguientes herramientas

* [NodeJS](https://nodejs.org/es/)
* [Angular](https://cli.angular.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Instalación

[Descargamos](https://github.com/FJALCode/estandares-desarrollo/archive/master.zip) o clonamos el proyecto a través del siguiente comando

```
git clone https://github.com/FJALCode/crud-angular-express.git
```

Instalamos las dependencias, para ello nos dirigimos a la carpeta de `src` y copiamos el siguiente comando
```
npm install
```

Dentro de `src` creamos un archivo de nombre `key.ts` en el cual indicaremos los datos para generar la conexión a nuestra BD

```
export default{
    database: {
        host: 'localhost',
        port: 5434,
        database: 'ng_games_db',
        user: 'postgres',
        password: 'contraseña'
    }
}
```

## Deployment
Probamos la conexión con el servidor utilizando el comando
```
npm start
```
> Este proyecto usa morgan y cors, si obtienes algún error con estas dependencias puedes instalarlas usando `npm i @types/morgan @types/cors -D`

## Version

1.0.0

## Autores

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars2.githubusercontent.com/u/48934580?s=460&v=4" width="100px;"/><br /><sub><b>Fernando Antúnez</b></sub>](https://github.com/FJALCode)<br />[💻](https://github.com/FJALCode "Code") [📢](#talk-Meabed "Talks")
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE)

## Expresiones de Gratitud
Este proyecto se realizo gracias al trabajo base de: 
</br>[<img src="https://avatars3.githubusercontent.com/u/13667358?s=460&v=4" width="100px;"/><br/><sub><b>Fazt</b></sub>](https://github.com/FaztTech)


