//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./account_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');
const authTypeDefs = require('./auth_type_defs');
const bibliotecaTypeDefs = require('./biblio_type_defs');
const storeTypeDefs =require('./store_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, accountTypeDefs, transactionTypeDefs, bibliotecaTypeDefs, storeTypeDefs];

//Se exportan
module.exports = schemasArrays;