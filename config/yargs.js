const opts = {
    base: {
        demand: true,
        alias: `b`
    },
    limite: {
        alias: `l`,
        default: 10
    }
};

const argv = require('yargs')
    .command(`listar`, `Imprime en consola la tabla de multiplicar`, opts)
    .command(`crear`, `Crea un archivo con la tabla en base --base`, opts)
    .help()
    .argv;

module.exports = {
    argv
}