const bibliotecaResolver = {
    Query: {
        bookDetails: async(_, { book_id }, { dataSources}) => {
            //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
           // if (username == usernameToken)
            if(book_id!=null)
                return dataSources.biblioAPI.querybook(book_id)
            else
                return null
    
        },
        categoryDetails: async(_,{} ,{ dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username

            //if (username == usernameToken)
                return dataSources.biblioAPI.Category()
           // else
            //    return null
    
        },
        authorDetails: async(_, { author_id }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username

            //if (username == usernameToken)
            if(author_id!=null)
                return dataSources.biblioAPI.Author(author_id)
            else
                return null
    
        },
    },
    Mutation: {
        createBook: async(_, { book }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
            if (book!=null)
                return dataSources.biblioAPI.createbook(book)
            else
                return null
    
        },
        createCategory: async(_, { category_name }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            //if (username == usernameToken)
            if(category_name!=null)
                return dataSources.biblioAPI.createCategory(category_name)
            else
                return null
    
        },
        createAuthor: async(_, { author }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            
            //if (username == usernameToken)
            if (author!=null)
                return dataSources.biblioAPI.createAuthor(author)
            else
                return null
    
        }
    },

};

module.exports = bibliotecaResolver;