/**
 * Importar libreria express, y el tipo de dato Application
 */
import express, { Application } from 'express';

/**
 * Importamos las librerias morgan y cors
 */
import morgan from 'morgan';
import cors from 'cors';

/**
 * Si genra error la ruta puede ser debido a que el archivo este vacio
 */
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';


/**
 * Clase a ejecutar para la creación del servidor
 * @class Server
 * @returns {app}
 */
class Server {

    /**
     * Variable para la creación de
     * @type {Application}
     * @memberof Server
     */
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * Encargado de configurar la var app
     * @method config()
     * @memberof Server
     */
    config(): void {
        /**
         * variable creada ('port')
         * El process.env.PORT || 3000 lo que indica es que si existe un puerto preestablecido por nuestra aplicación debe tomarlo, en caso contrario debe tomar el puerto 3000
         */
        this.app.set('port', process.env.PORT || 3000);

        /**
         * Usamos morgan para ver por consola los tipos de peticiones que se realizar al servidor, usaremos la propiedad 'dev' de morgan para ello 
         */
        this.app.use(morgan('dev'));

        /**
         * Permite que angular pueda pedir los datos a nuestro servidor
         */

        this.app.use(cors());

        /**
         * Metodo de express que permite aceptar formatos de tipo JSON de angular
         */
        this.app.use(express.json());

        /**
         * Metodo de express que permite recibir datos desde un formato html
         */
        this.app.use(express.urlencoded({extended : false}));

    }



    /**
     * Define las rutas del servidor de la var app
     * @method routes()
     * @memberof Server
     */
    routes(): void {

        /**
         * Accede a las rutas, siempre y cuando el usuario haya accedido previamente
         * al prefijo de web '/'.Por ser el prefijo base, no es necesario colocarlo,
         * ya que se sobrentiende. 
         */
        this.app.use('/',indexRoutes);

        /**
         * Accede a las rutas, siempre y cuando el usuario haya accedido previamente
         * al prefijo de web /api/games
         */
        this.app.use('/api/games',gamesRoutes);
    }

    /**
     * Permite incializar el servidor (igual que el app.listen)
     * @method start()
     * @memberof Server
     */
    start(): void {
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