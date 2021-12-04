const { gql } = require('apollo-server');

const storeTypeDefs = gql `

    type compra {
        id: String!
        fecha: Date!
        total: Float!
        accountId: String!
        items: List<String>!
    }

    input compraInput {
        items: List<String>!
    }

    extend type Query {
        compraByUsername(username: String!): [compra]
    }

    extend type Mutation {
        gitcreateCompra(compra: CompraInput!): Compra
    }
`;
module.exports = storeTypeDefs;