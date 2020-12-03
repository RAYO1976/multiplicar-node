//required
//hay tres tipos de required
//const fichero = require('fs'); //ejemplo de librería que existe en node - fileSystem
//const fichero = require('express'); //no existe en node
//const fichero = require('./<path_archivo>'); //archivos nuestros que creamos en nuestro proyecto



const fichero = require('fs');


let crearArchivo = (tablaMultiplicar) => {

    return new Promise((resolve, reject) => {
        if (!Number(tablaMultiplicar)) {
            reject(`ERROR: El valor --> ${tablaMultiplicar} no es un número`);
            return;
        }
        let data = ''
        for (let i = 1; i <= 10; i++) {
            let resultado = tablaMultiplicar * i;
            data += `${tablaMultiplicar}*${i}=${resultado}\n`;
        }

        fichero.writeFile(`tablas/tabla${tablaMultiplicar}.txt`, data, (err) => {
            if (err) return reject(err)
            else
                resolve(`tabla-${tablaMultiplicar}.txt`)
        });
    })

}


//así se define para que se pueda utilizar en otro lugar (ejemplo:app.js)
module.exports = {
    crearArchivo
}

/* Transformamos todo el código de abajo en una promesa */
/* 
let data = ''
for (let i = 1; i <= 10; i++) {
    let resultado = tablaMultiplicar * i;
    data += `${tablaMultiplicar}*${i}=${resultado}\n`;
}

//vamos a grabar la tabla de multiplicar en un archivo de texto

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fichero.writeFile(`tablas/tabla${tablaMultiplicar}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`La tabla del ${tablaMultiplicar} ha sido creada`);
}); */