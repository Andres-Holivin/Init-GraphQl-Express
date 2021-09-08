const {gql} = require("apollo-server-express")

module.exports = gql`
    type Books{
        id:Int
        name:String
        authorId:Int
    }
    type Query{
        Books: [Books]
    }
    input CreateBook{
        id:Int!
        name:String
        authorId:Int
    }
    input UpdateBook{
        name:String
        authorId:Int
    }
    type DeleteBook{
        id:Int!
    }
    type Mutation{
        createBook(input:CreateBook): Books!
        updateBook(id:Int,input:UpdateBook): Books!
        deleteBook(id:Int): DeleteBook!
    }
`;