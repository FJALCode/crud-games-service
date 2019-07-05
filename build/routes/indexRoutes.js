"use strict";
/**
 * Metodo router de express que devuelve un objeto
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
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
         * Ruta inicial de la aplicación http://localhost:3000/
         * Hace referencia al metodo index de la constante indexController
         */
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
