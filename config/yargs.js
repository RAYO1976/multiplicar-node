/* Se declara objeto options */

const options = {
    base: {
        demand: true, //comando obligatorio
        alias: 'b' //alias del comando; se podría escribir en vez de --base => - b
            //Ej: node app listar -b 5
    },
    limite: {
        alias: 'l',
        default: 4 //valor por defecto
    }
}

/* ESTO SE PODRÍA SUSTITUIR POR 

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //comando obligatorio
            alias: 'b' //alias del comando; se podría escribir en vez de --base => - b
                //Ej: node app listar -b 5
        },
        limite: {
            alias: 'l',
            default: 4 //valor por defecto
        }
    })
    .help() //para que ofrezca la ayuda cuando se pulse node app listar --help
    .argv;
*/

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options).help().argv;


//Para poder usuar "argv" desde fuera hay que exportarlo

module.exports = {
    argv
}