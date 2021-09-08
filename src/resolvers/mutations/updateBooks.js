const { ApolloError } = require("apollo-server");

module.exports=async (_,{id,input},{models})=>{
    try{
        const booksToUpdate= await models.Books.findOne({_id:id});

        if(!podcastToUpdate) throw new ApolloError(`Could not find podcast with id: '${id}'.`,400);

        Object.keys(input).forEach(value=>{
            booksToUpdate[value]=input[value];
        });
    
        const updateBook= await booksToUpdate.save();
        return updateBook;
    }catch(e){
        throw new ApolloError(e)
    }
}