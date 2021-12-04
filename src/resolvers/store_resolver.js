const storeResolver = {
    Query: {
        compraByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.accountAPI.compraByUsername(username)
            else
                return null
    
        }
    },
    Mutation: {
        createCompra: async(_, { compra }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (compra.username == usernameToken)
                return dataSources.accountAPI.createCompra(compra)
            else
                return null
    
        }
    }
};

module.exports = storeResolver;