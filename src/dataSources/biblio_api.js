const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class BiblioAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.biblio_api_url;
    }
    async createbook(book) {
        book = new Object(JSON.parse(JSON.stringify(book)));
        return await this.post('/api/books/create/', book);
    }
    async querybook(book_id) {
        return await this.get(`/api/books/${book_id}`);
    }

    async querybooks() {
        return await this.get(`/api/books`);
    }
    async createAuthor(author) {
        author = new Object(JSON.parse(JSON.stringify(author)));
        return await this.post('/api/authors/create/', author);
    }
    async Author(Author_id) {
        return await this.get(`/api/authors/${Author_id}`);
    }

    async queryAuthor() {
        return await this.get(`/api/authors`);
    }


    async createCategory(category) {
        category = new Object(JSON.parse(JSON.stringify(category)));
        return await this.post('/api/categories/create/', category);
    }
    
    async Category() {
        return await this.get(`/api/categories`);
    }
    
}
module.exports = BiblioAPI;