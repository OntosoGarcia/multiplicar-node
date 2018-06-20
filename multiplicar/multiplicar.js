// Requireds
const fs = require('fs'); //Required nativo de node

// const fs = require('express');//No nativo, instalado
// const fs = require('./fs');//Del propio proyecto

//OTRA OPCION PARA EXPORTACION
// module.exports.crearArchivo = (base)=> {
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un número`);
            return;
        }

        let data = ``;

        for (let i = 0; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`files/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log(`Tabla de multiplicar en base ${base} hasta ${limite}`);
	for (let i = 0; i <= limite; i++) {
		console.log(`${base} * ${i} = ${base*i}`);
	}
}

//exportamos la función crar archivo a module
module.exports = {
    crearArchivo,
	listarTabla
}
