const {ApolloServer} = require("apollo-server");
const models  = require("./models");
const connectDb = require("./config/db");
const resolvers = require("./resolvers");
const typeDefs  = require("./types");
const books  = require("./types/Books");

connectDb();

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:{models}
});

server.listen({port:process.env.PORT||4000}).then(({url})=>{
    console.log(`Server is ready at ${url}`);
})