const { gql } = require('apollo-server');

const bibliotecaTypeDefs = gql `

    type Author {
        author_id: Int!
        author_name: String!
        author_surname: String!
    }

    type BookDetails {
        book_id: Int!
        book_title: String!
        ISBN: String!
        image: String
        publication_year: Int!
        language: String!
        sale_price: Float!
        quantity_for_sale: Int!
        author_id: Int!
        category_id: Int!
    }

    type CategoryDetails {
        category_id: Int!
        category_name: String!
    }

    input AuthorInput {
        author_name: String!
        author_surname: String!
    }

    input BookInput {
        book_title: String!
        isbn: String!
        image: String
        publication_year: Int!
        language: String!
        sale_price: Float!
        quantity_for_sale: Int!
        author_id: Int!
        category_id: Int!
    }

    input CategoryInput {
        category_name: String!
    }
    
    extend type Mutation {
        createBook(book: BookInput!): BookDetails!
        createAuthor(author: AuthorInput!): Author!
        createCategory(category_name: CategoryInput!): CategoryDetails!
    }
    
    extend type Query {
        bookDetails(book_id: Int!): BookDetails!
        categoryDetails: [CategoryDetails]!
        authorDetails(author_id: Int!): Author!
        getAuthor: [Author]!
    }
`;
/*
        
        authorsDetails(): [author]
        booksDetails(): [book]
         categoryDetails(): CategoryDetails
*/

module.exports = bibliotecaTypeDefs;
