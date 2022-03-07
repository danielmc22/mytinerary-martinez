const Router = require('express').Router()
;
const ciudadesController = require('../controllers/ciudadesControllers'); /* requerimos el archivo del controlador yendo a la carpeta de controladores */

const {obtenerCiudades, cargarCiudad,obtenerCiudadPorId, borrarCiudad, modificarCiudad}=ciudadesController  /* aqui se desestructura el objeto(obtener informacion de las props de manera separada) requerido en linea 3   */
                                            /* a {obtenerCiudades} se le asigna lo requerido en la linea 3  */
Router.route('/allcities')                   /* Del metodo Router se establece una ruta --- Este es el endpoint por el cual se va a obtener el get   --  el nombre entre parentesis es el nombre del endpoint y ese lo defino yo*/
.get(obtenerCiudades)                       /* el metodo get va llamar a la fx obtenerCiudades */
.post(cargarCiudad)                            /* el metodo post llama automaticamente a CARGARCIUDADES que es una fx está ubicada en ciudadescONTROLLER */


Router.route("/cities/:id")   //Al poner ":" significa que el id va a ser un parametro
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerCiudadPorId)


module.exports = Router