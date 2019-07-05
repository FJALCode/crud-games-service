"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
/**
 * Clase controler para las rutas de los indices
 * @module controllers
 * @class GamesController
 * @author Fernando Antúnez `<fernandoantunezcode@gmail.com>`
 */
class GamesController {
    /**
     * Metodo que listará todos losjuegos existentes
     * @method list
     * @param { Request } req parametro de petición
     * @param { Response } res parametro de respuesta
     * @memberof GamesController
     */
    list(req, res) {
        // res.send('Games');
        database_1.default.any('SELECT * FROM games')
            .then((data) => {
            if (data.length > 0) {
                res.status(200).json({
                    data,
                    status: 1
                });
            }
            else {
                res.status(404).json({
                    message: 'Empty',
                    status: 0
                });
            }
            // console.log('la data es:**********', data);
        }).catch(err => {
            console.log('Surgio un error*************', err);
        });
        // db.any("SELECT * FROM games")
        // res.json({ text: 'Listing games' });
    }
    /**
     * Metodo que listará un solo juego
     * @method getOne
     * @param {Request} req
     * @param {Response} res
     * @memberof GamesController
     */
    getOne(req, res) {
        // res.send('Games');
        // Otra forma de almacenar el dato
        const { id } = req.params;
        // console.log('El id es: ', id);
        // console.log('el id con el req param es', req.params.id);
        database_1.default.any('SELECT * FROM games where id=$1', [req.params.id])
            .then((data) => {
            if (data.length > 0) {
                console.log('la data es:**********', data);
                res.status(200).json({
                    data,
                    status: 1
                });
            }
            else {
                res.status(404).json({
                    message: 'NotFound',
                    status: 0
                });
            }
        }).catch(err => {
            console.log('Surgio un error*************', err);
        });
        // db.any("SELECT * FROM games")
        // res.json({ text: 'this is the game: (' + req.params.id + ')' });
    }
    /**
     * Metodo que permite crear un juego
     * @method create
     * @async Metodo de tipo asincrono
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise <void>}
     * @memberof GamesController
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * El await permitira que la función espere hasta que termine
             */
            yield database_1.default.none('INSERT INTO games (title, description, image) VALUES($1, $2, $3)', [req.body.title, req.body.description, req.body.image])
                .then((data) => {
                res.json({
                    message: 'Game Saved',
                    status: 1
                });
            })
                .catch(error => {
                console.log('El error es:*********', error);
                res.json({ message: 'Error Saving' });
            });
            // console.log('probando async');
        });
    }
    /**
     * Metodo que permite borrar un juego
     * @method delete
     * @param {Request} req
     * @param {Response} res
     * @memberof GamesController
     */
    delete(req, res) {
        // res.json({ text: 'deleting the game: (' + req.params.id + ')' })
        database_1.default.any('DELETE FROM games WHERE id = ${id}', {
            id: req.params.id
        })
            .then(data => {
            res.status(200).json({
                data,
                status: 1
            });
        })
            .catch(error => {
            res.status(500).json({
                'ERROR:': error
            });
        });
    }
    /**
     * Metodo que actualizar borrar un juego
     * @method update
     * @param {Request} req
     * @param {Response} res
     * @memberof GamesController
     */
    update(req, res) {
        // res.json({ text: 'update the game: (' + req.params.id + ')' });
        database_1.default.any('UPDATE games SET title=${title}, description=${description}, image=${image} WHERE id = ${id}', {
            id: req.params.id,
            title: 'Resident Evil Revelation 1',
            description: 'Juego de Acción',
            image: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcmMmF9E0yJcacGIxFX98aHhd1rhJz1mcIH.ir2_GwvY5nnaXh4RiF.BHSQB1WtsMrC8buUM9XWa3ytml0sqnkEcMd641pdhE1OGMJKXlb1k9QZpkZGcBCNx9b4eA8cz_yXzHv8HrKYOBI5taH3SLbDfDiSZgQ7IuoMGGl5DP0NNs-&w=200&h=300&format=jpg'
        })
            .then(data => {
            res.status(200).json({
                data,
                status: 1
            });
        })
            .catch(error => {
            res.status(500).json({
                'ERROR:': error
            });
        });
    }
}
/**
 * Exportamos la clase GamesController ya instanciada.
 * Esto permite generar mayor orden y exportar todos los metodos que se creen dentro de la clase
 * Importa todo el modulo
 */
/**
 * @constant gamesController
 * @memberof GamesController
*/
const gamesController = new GamesController();
exports.default = gamesController;
