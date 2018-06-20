
const argv = require('./config/yargs').argv;


// Requireds
// Accede a la función directamente, si ponemos un nombre sin destructurar cogería un array de todas las funciones exportadas
const { crearArchivo } = require(`./multiplicar/multiplicar`);
const { listarTabla } = require(`./multiplicar/multiplicar`);

let comando = argv._[0];

switch (comando) {
    case `listar`:
        listarTabla(argv.base, argv.limite);
        break;
    case `crear`:
        crearArchivo(argv.base)
            .then( archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`Comando no reconocido`);

}
