/**
 * Metodo router de express que devuelve un objeto
 */

 import { Router } from 'express';
 import { indexController } from '../controllers/indexController'

 class IndexRoutes {
     
   /**
    * Variable que almacena todas las rutas
    * @type {Router}
    * @memberof IndexRoutes
    */
    public router : Router = Router()

     constructor() {
         this.config();
     }

     /**
      * Almacena las rutas configuradas
      * @method config
      * @memberof IndexRoutes
      */
     config(): void {

        /**
         * Ruta inicial de la aplicación http://localhost:3000/
         * Hace referencia al metodo index de la constante indexController
         */
         this.router.get('/', indexController.index);
     }
 }

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
