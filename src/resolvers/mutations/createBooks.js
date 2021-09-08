const { ApolloError } = require("apollo-server");

module.exports= async(_,{input},{models})=>{
    try{
        newBooks= await models.Books.create(input);
        return newBooks;
    }catch(e){
        throw new ApolloError(e)
    }
}