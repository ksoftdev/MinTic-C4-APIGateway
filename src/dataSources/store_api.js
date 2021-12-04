const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class AccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }
    async createCompra(compra) {
        compra = new Object(JSON.parse(JSON.stringify(compra)));
        return await this.post('/compras', compra);
    }
    async Compra(id) {
        return await this.get(`/compras/${id}`);
    }
}
module.exports = storeMSAPI;