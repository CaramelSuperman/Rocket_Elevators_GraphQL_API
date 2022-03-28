const express = require('express')
const app = express()
const { graphqlHTTP } = require("express-graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'helloworld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => "HelloWorld"
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen('5000', () => console.log("Server is running"))