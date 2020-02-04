// require - importar módulos
// module.exports - exportar o módulo atual

/*
 * Migration 
 * - sequência de chamadas para que eu consiga construir o meu banco de dados de modo cronológico
 * - tenho a capacidade de reconstruir todo o meu BD até que ele esteja na versão atual
 * - mantem uma rastreabilidade das modificações do meu BD
 * - os arquivos migrations são módulos do Node que exportam duas funções, up e down
 * - tudo o que eu contruo/faço no up eu destruo/desfaço no down
 */

const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex

