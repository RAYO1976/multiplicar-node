//required
//hay tres tipos de required
//const fichero = require('fs'); //ejemplo de librería que existe en node - fileSystem
//const fichero = require('express'); //no existe en node
//const fichero = require('./<path_archivo>'); //archivos nuestros que creamos en nuestro proyecto

//estamos diciendo que requerimos el paquete de yargs que ya previamente instalamos en los modulos de node
/* const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv */

/* ESTO LO VAMOS A LLEVAR AL FICHERO /config/yargs.js **
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
/*AQUI IMPORTAMOS EL FICHERO DE YARGS.JS */
//con esto importamos TODO el contenido del fichero yargs, de todo ese fichero solo nos quedamos con argv
const argv = require('./config/yargs').argv
let colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Comando Listar'.red);
        const { crearArchivo } = require("./multiplicar/multiplicar");
        const fichero = require('fs');
        //let tablaMultiplicar = 4;
        let tablaMultiplicar = argv.base;
        let limite = argv.limite;

        let data = ''
        for (let i = 1; i <= limite; i++) {
            let resultado = tablaMultiplicar * i;
            data += `${tablaMultiplicar}*${i}=${resultado}\n`;
        }

        //vamos a grabar la tabla de multiplicar en un archivo de texto

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fichero.writeFile(`tablas/tabla${tablaMultiplicar}.txt`, data, (err) => {
            if (err) throw err;
            console.log(`La tabla del `, colors.red(tablaMultiplicar), ` ha sido creada`);
        });
        break;
    case 'dormir':
        console.log('Comando Dormir');
        break;
}






//console.log(process.argv);
let argv2 = process.argv;
console.log('***ARGV DE LOS PROCESOS****', argv2);
console.log('++++ARGV DE YARGS+++++', argv);

//obtener uno de los argumentos 

console.log('-- LA BASE ES----', argv.base);
console.log('---EL LÍMITE ES---', argv.limite);


/* 
let variable = process.argv[2];
//la variable viene de esta manera --tablaMultiplicar=2 por lo que cortamos por el igual y nos quedamos con el de posición 1 que contiene el 2

let tablaMultiplicar = variable.split('=')[1];


crearArchivo(tablaMultiplicar).then(archivo => console.log(`Archivo creado: ${archivo}`), err => console.log(`Hubo un error: ${err}`)); */