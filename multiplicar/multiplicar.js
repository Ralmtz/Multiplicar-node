const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`.blue);
    }
}

let crearArchivo = (numero, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(numero)) {
            reject(`El dato ${numero} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${numero} * ${i} = ${numero*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${numero} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${numero} al ${limite}.txt`.green)
                // console.log(`El archivo tabla-${numero}.txt ha sido creado`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}


//otra forma de exportar 
// module.exports.crearArchivo =>{}