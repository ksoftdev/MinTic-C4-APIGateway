const { gql } = require('apollo-server');

const storeTypeDefs = gql `

    type compra {
        id: String!
        fecha: String!
        total: Float!
        accountId: String!
        items: [String]!
    }

    input compraInput {
        id: String!
        fecha: String!
        total: Float!
        accountId: String!
        items: [String]!
    }

    extend type Query {
        compraByid(id: String!): compra
    }

    extend type Mutation {
        createCompra(compra: compraInput!): compra
    }
`;
module.exports = storeTypeDefs;
