"use strict";
/**
 * Metodo router de express que devuelve un objeto
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import GamesController from '../controllers/gamesController';
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        /**
         * Variable que almacena todas las rutas
         * @type {Router}
         * @memberof IndexRoutes
         */
        this.router = express_1.Router();
        this.config();
    }
    /**
     * Almacena las rutas configuradas
     * @method config
     * @memberof IndexRoutes
     */
    config() {
        /**
         * Ruta inicial de la aplicación http://localhost:3000/api/games/
         * Muestra todos los juegos disponible
         */
        this.router.get('/', gamesController_1.default.list);
        /**
         * Lista un juego en especifico
         */
        this.router.get('/:id', gamesController_1.default.getOne);
        /**
         * Ruta para crear un juego
         */
        this.router.post('/', gamesController_1.default.create);
        /**
         * Ruta para borrar un juego
         */
        this.router.delete('/:id', gamesController_1.default.delete);
        /**
         * Ruta para actualizar un juego
         */
        this.router.put('/:id', gamesController_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
