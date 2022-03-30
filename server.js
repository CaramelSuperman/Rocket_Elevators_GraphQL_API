var mysql = require('mysql')
// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "root",
//     host: "root",
//     database: "Rocket_Elevator_Information_System_development",
//     password: "Rolens123@",
//     port: "5432"
//   });
// const schema = "myschema";
// var pgSchemas = [];

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rolens123@",
    database: "Rocket_Elevator_Information_System_development"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("Show tables", function (err, result, fields) {
      if (err) throw err;
    //   console.log(result);
    console.log("we are connected to mysql")
    });
    con.query("Select * from customers", function (err, result, fields) {
      if (err) throw err;
    //   console.log(result);
    //   console.log("Addresses table")
    });
  });   


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
        notes: { type: GraphQLString },
        interventions: { type: GraphQLList(InterventionType) }
    })
})
const CustomerType = new GraphQLObjectType({
    name: "Customer",
    description: "Get customers infos",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        address: { type: [AddressType] },
        company_name: { type: GraphQLNonNull(GraphQLString) },
        email_company: { type: GraphQLNonNull(GraphQLString) },
        company_description: { type: GraphQLString},
        full_name_service_technical_authority: { type: GraphQLNonNull(GraphQLString) },
        technical_authority_phone: { type: GraphQLNonNull(GraphQLInt) },
        technical_authority_email: { type: GraphQLNonNull(GraphQLString) },
        interventions: { type: GraphQLList(InterventionType) }
        
    })
})

const InterventionType = new GraphQLObjectType({
    name: "Intervention",
    description: "Interventions date",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        date_start: { type: GraphQLNonNull(GraphQLString) },
        date_end: { type: GraphQLNonNull(GraphQLString) },
        notes: { type: GraphQLString }
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
            description: "Specific address",
            args: {
                id: { type: GraphQLInt },
                city: { type: GraphQLString }
            },
            resolve: (parent, args) => address.find(address => address.id === args.id)
        },
        addresses: {
            type: new GraphQLList(AddressType),
            description: "All available batteries",
            resolve: () =>  {
                var addresses = con.query("Select * from addresses", function (err, result, fields) {
                    if (err) throw err;
                    // console.log(result);
                    // console.log("Get all addresses")
                    return result
                  });
                  return 1
                
            }
        },
        interventions: {
            type: InterventionType,
            description: "get intervetnions",
            args: {
                id: { type: GraphQLInt },
            },
            resolve: (parent, args) => interventions.find(intervention => intervention.id === args.id)
        },
        interventions: {
            type: InterventionType,
            description: "get intervetnions",
            args: {
                id: { type: GraphQLInt },
            },
            resolve: (parent, args) => interventions.find(intervention => intervention.id === args.id)
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
