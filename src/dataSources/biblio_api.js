const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class BiblioAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.biblioMS_api_url;
    }
    async createbook(BookDetails) {
        Book = new Object(JSON.parse(JSON.stringify(BookDetails)));
        return await this.post('/api/books/create', Book);
    }
    async querybook(book_id) {
        return await this.get(`/api/books/${book_id}`);
    }

    async querybooks() {
        return await this.get(`/api/books`);
    }
    async createAuthor(author) {
        author = new Object(JSON.parse(JSON.stringify(author)));
        return await this.post('/api/authors/create', author);
    }
    async Author(Author_id) {
        return await this.get(`/api/authors/${Author_id}`);
    }

    async createCategory(category) {
        category = new Object(JSON.parse(JSON.stringify(category)));
        return await this.post('/api/categories/create', category);
    }
    
    async Category() {
        return await this.get(`/api/categories`);
    }
    
}
module.exports = BiblioAPI;