import { Request, Response } from 'express';

/**
 * Clase controller para las rutas de los indices
 * @class IndexController
 */
class IndexController {

    /**
     * Metodo que hace referencia a la clase routes/indexRoutes del metodo GET "/" 
     * @param { Request } req parametro de petición
     * @param { Response } res parametro de respuesta
     * @memberof IndexController
     */
    public index (req: Request, res : Response) {
        res.json({text: 'API Is /api/games'})
        // res.send('Metodo Get "/"') 
    }
}

/**
 * Exportamos la clase IndexController ya instanciada.
 * Esto permite generar mayor orden y exportar todos los metodos que se creen dentro de la clase
 * Solo se importa la constante.
 */

export const indexController = new IndexController();