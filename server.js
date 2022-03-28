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
const BatteryType = new GraphQLObjectType({
    name: "Battery",
    description: "Battery",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        status: { type: GraphQLNonNull(GraphQLString) },
        columns: { 
            type: new GraphQLList(ColumnType),
            resolve: (battery) => {
                return columns.filter(column => battery.columnID === column.ID)
            }
        }
    })
})
const ColumnType = new GraphQLObjectType({
    name: "Column",
    description: "Column",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        status: { type: GraphQLNonNull(GraphQLString) },
        elevators: { 
            type: new GraphQLList(ElevatorType),
            resolve: (column) => {
                return elevators.filter(elevator => column.elevatorID === elevator.ID)
            }
        }
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
        battery: {
            type: BatteryType,
            description: "Specific battery",
            args: {
                id: { type: GraphQLInt },
                status: { type: GraphQLString }
            },
            resolve: (parent, args) => batteries.find(battery => battery.id === args.id)
        },
        column: {
            type: ColumnType,
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
        batteries: {
            type: new GraphQLList(BatteryType),
            description: "All available batteries",
            resolve: () => batteries
        },
        columns: {
            type: new GraphQLList(BatteryType),
            description: "All available columns",
            resolve: () => columns
        },
        elevators: {
            type: new GraphQLList(BatteryType),
            description: "All available elevators",
            resolve: () => batteries
        },
    })
})

// mutation to be able to modify the objects

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Change objects",
    fields: () => ({
        changeStatusColumn: {
            type: ColumnType,
            description: "modify Column Status",
            args
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
app.listen('5000', () => console.log("Server is running"))