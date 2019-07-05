"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Importar libreria express, y el tipo de dato Application
 */
const express_1 = __importDefault(require("express"));
/**
 * Importamos las librerias morgan y cors
 */
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/**
 * Si genra error la ruta puede ser debido a que el archivo este vacio
 */
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
/**
 * Clase a ejecutar para la creación del servidor
 * @class Server
 * @returns {app}
 */
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    /**
     * Encargado de configurar la var app
     * @method config()
     * @memberof Server
     */
    config() {
        /**
         * variable creada ('port')
         * El process.env.PORT || 3000 lo que indica es que si existe un puerto preestablecido por nuestra aplicación debe tomarlo, en caso contrario debe tomar el puerto 3000
         */
        this.app.set('port', process.env.PORT || 3000);
        /**
         * Usamos morgan para ver por consola los tipos de peticiones que se realizar al servidor, usaremos la propiedad 'dev' de morgan para ello
         */
        this.app.use(morgan_1.default('dev'));
        /**
         * Permite que angular pueda pedir los datos a nuestro servidor
         */
        this.app.use(cors_1.default());
        /**
         * Metodo de express que permite aceptar formatos de tipo JSON de angular
         */
        this.app.use(express_1.default.json());
        /**
         * Metodo de express que permite recibir datos desde un formato html
         */
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    /**
     * Define las rutas del servidor de la var app
     * @method routes()
     * @memberof Server
     */
    routes() {
        /**
         * Accede a las rutas, siempre y cuando el usuario haya accedido previamente
         * al prefijo de web '/'.Por ser el prefijo base, no es necesario colocarlo,
         * ya que se sobrentiende.
         */
        this.app.use('/', indexRoutes_1.default);
        /**
         * Accede a las rutas, siempre y cuando el usuario haya accedido previamente
         * al prefijo de web /api/games
         */
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    /**
     * Permite incializar el servidor (igual que el app.listen)
     * @method start()
     * @memberof Server
     */
    start() {
        /**
         * Asignamos el puerto e inicializamos
         * this.app.get (el get es propiedad interna del app obtenida de express)
         */
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
