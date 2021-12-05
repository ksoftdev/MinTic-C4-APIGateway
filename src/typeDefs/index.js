//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./account_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');
const storeTypeDefs = require('./store_type_defs.js');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, accountTypeDefs, transactionTypeDefs, storeTypeDefs];

//Se exportan
module.exports = schemasArrays;