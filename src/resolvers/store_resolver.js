const storeResolver = {
    Query: {
        compraByid: async(_, { id }, { dataSources, userIdToken }) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
            if(id!=null)
                return dataSources.storeAPI.Compra(id)
            else
                return null
    
        }
    },
    Mutation: {
        createCompra: async(_, { compra }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (compra.accountId == usernameToken)
                return dataSources.storeAPI.createCompra(compra)
            else
                return null
    
        }
    }
};

module.exports = storeResolver;