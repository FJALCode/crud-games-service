/**
 * Metodo router de express que devuelve un objeto
 */

import { Router } from 'express';
// import GamesController from '../controllers/gamesController';
import gamesController from '../controllers/gamesController';

class GamesRoutes {    
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
        * Ruta inicial de la aplicación http://localhost:3000/api/games/
        * Muestra todos los juegos disponible
        */
        this.router.get('/', gamesController.list);

       /**
        * Lista un juego en especifico
        */
       this.router.get('/:id', gamesController.getOne);

        /**
         * Ruta para crear un juego
         */
        this.router.post('/', gamesController.create);

        /**
         * Ruta para borrar un juego
         */
        this.router.delete('/:id', gamesController.delete);

        /**
         * Ruta para actualizar un juego
         */
        this.router.put('/:id', gamesController.update);
        
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
