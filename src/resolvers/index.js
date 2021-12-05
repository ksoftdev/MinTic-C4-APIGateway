const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');
const bibliotecaResolver = require('./biblio_resolver');
const authResolver = require('./auth_resolver');
const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver, bibliotecaResolver);

module.exports = resolvers;