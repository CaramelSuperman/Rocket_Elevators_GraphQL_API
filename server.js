require('./connections.js')
const express = require('express')
const app = express()
const { graphqlHTTP } = require("express-graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')

// OBJECTS
const AddressType = new GraphQLObjectType({
    name: "Address",
    description: "Address of the buidling",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        type_of_address: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLString},
        entity: { type: GraphQLString},
        numer_and_street: { type: GraphQLNonNull(GraphQLString) },
        suite_and_appartment: { type: GraphQLString},
        city: { type: GraphQLNonNull(GraphQLString) },
        postal_code: { type: GraphQLString },
        country: {type: GraphQLNonNull(GraphQLString) },
        notes: { type: GraphQLString }
    })
})
const Buidling = new GraphQLObjectType({
    name: "Building",
    description: "Get building infos",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        address: { type: [AddressType] },
        
    })
})

const ElevatorType = new GraphQLObjectType({
    name: "Elevator",
    description: "Elevator",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        status: { type: GraphQLNonNull(GraphQLString) }
    })
})


//PRINTING OBJECTS

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    // function so we can define everything before we run it
    fields: () => ({
        address: {
            type: AddressType,
            description: "Specifi address",
            args: {
                id: { type: GraphQLInt },
                city: { type: GraphQLString }
            },
            resolve: (parent, args) => batteries.find(battery => battery.id === args.id)
        },
        column: {
            type: AddressType,
            description: "Specific column",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => columns.find(column => column.id === args.id)
        },
        elevator: {
            type: ElevatorType,
            description: "Specific elevator",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => elevators.find(elevator => elevator.id === args.id)
        },
        addresses: {
            type: new GraphQLList(AddressType),
            description: "All available batteries",
            resolve: () =>  {
                con.query("Select * from addresses", function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    console.log("Get all addresses")
                  });
                return result
            }
        },
        columns: {
            type: new GraphQLList(AddressType),
            description: "All available columns",
            resolve: () => columns
        },
        elevators: {
            type: new GraphQLList(AddressType),
            description: "All available elevators",
            resolve: () => batteries
        },
    })
})

// mutation to be able to modify the objects

const RootMutationType = new GraphQLObjectType({
    name: "Mutations",
    description: "Change objects",
    fields: () => ({
        changeStatusAddress: {
            type: AddressType,
            description: "modify Column Status",
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen('3000', () => console.log("Server is running"))


// javascript error codes
const schemaCodes = {
  "25007": "schema_and_data_statement_mixing_not_supported",
  "3F000": "invalid_schema_name",
  "42P06": "duplicate_schema",
  "42P15": "invalid_schema_definition",
  "42000": "syntax_error_or_access_rule_violation",
  "42601": "syntax_error"
};
