const argv = require('./config/yargs').argv
const colors = require('colors');
//requireds

// const fs = require('fs'); //libreria ya existe en nodo, no se necesita modificar 
// const fs = require('express');// paquetes no nativos de node 
// const fs = require('./fs');//archivos que creamos nosotros 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado :${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}
// let data = '';
// let numero = -2;
// // tablamulti = (numero) => {
// for (let i = 1; i <= 10; i++) {
//     // console.log(`${numero} * ${i} = ${numero*i}`);
//     data += `${numero} * ${i} = ${numero*i}\n`;
// }
// // }

// fs.writeFile(`./tablas/tabla-${numero}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${numero}.txt ha sido creado`);
// });

// // tablamulti(2);
// console.log(process.argv);


//despues de const o let y siguen llaves es destructuring EJ: let numeros {base,altura} = area;

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log('Limite', argv.limite);
// console.log(argv2);