var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rolens123@",
    database: "Rocket_Elevator_Information_System_development"
});

const express = require('express')
const app = express()
const { graphqlHTTP } = require("express-graphql");


con.connect(function(err) {
    if (err) throw err;
    con.query("Select * from customers", function (err, result, fields) {
      if (err) throw err;
      //console.log(result);
    //   console.log("Addresses table")
    });
  });   

// Sequelize ->

import Sequelize from 'sequelize';

var db = {}

const sequelize = new Sequelize(
    'Rocket_Elevator_Information_System_development',
    'root',
    'Rolens123@',
    {
        host: 'localhost',
        port: '3000',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
        operatorsAliases: false,
    },
)


const graphql = require('graphql');

class Address {
    constructor( id, type_of_address, numer_and_street, city, postal_code, country, interventions) {
      this.type_of_address = type_of_address;
      this.id = id
      this.numer_and_street = numer_and_street;
      this.city = city;
      this.postal_code = postal_code;
      this.country = country;
      this.interventions = interventions;

    }
  }

const AddressInputType = new graphql.GraphQLInputObjectType({
    name: 'AddressInput',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        type_of_address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        numer_and_street: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        suite_and_appartment: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        postal_code: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        country: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        //interventions: { type: new graphql.GraphQLNonNull(graphql.GraphQLList(InterventionType)) },
    }
  });
  
  const AddressType = new graphql.GraphQLObjectType({
    name: 'Address',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        type_of_address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        numer_and_street: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        suite_and_appartment: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        postal_code: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        country: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    }
  });

  // Customers - >

  class Customer {
    constructor( type_of_address, numer_and_street, city, postal_code, country, interventions) {
      this.type_of_address = type_of_address;
      this.numer_and_street = numer_and_street;
      this.city = city;
      this.postal_code = postal_code;
      this.country = country;
      this.interventions = interventions;

    }
  }

const CustomerInputType = new graphql.GraphQLInputObjectType({
    name: 'CustomerInput',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        type_of_address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        numer_and_street: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        suite_and_appartment: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        postal_code: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        country: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        //interventions: { type: new graphql.GraphQLNonNull(graphql.GraphQLList(InterventionType)) },
    }
  });
  
  const CustomerType = new graphql.GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        type_of_address: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        numer_and_street: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        suite_and_appartment: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        postal_code: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        country: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    }
  });


  let address = new Address(1, "Appartment", "2332 bellevue", "apt. 256", "montreal", "2k4 3k5", "canada" );

  const mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createAddress: {
        type: AddressType,
        args: {
          address: {
            type: new graphql.GraphQLNonNull(AddressInputType),
          },
        },
        resolve: (_, { address: { type_of_address, numer_and_street, suite_and_appartment, city, postal_code,country } }) => {
          address = new Address(type_of_address, numer_and_street, suite_and_appartment, city, postal_code,country);
          return address;
        }
      }
    }
  });

  
  const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      address: {
        type: AddressType,
        args: {
            id: { type: graphql.GraphQLInt}
        },
        resolve: (parent, args) => address.find(address => address.id === args.id)
      }
    }
  });

// let queryType = function( sql, values ) {
//     return new Promise(( resolve, reject ) => {
//         con.getConnection(function(err, con) {
//             if (err) {
//                 resolve( err )
//             } else {
//                 con.query(sql, values, ( err, rows) => {
//                     con.release()
//                     if ( err ) {
//                         reject( err )
//                     } else {
//                         resolve( rows )
//                     }
//                 })
//             }
//         })
//     })
// }


const schema = new graphql.GraphQLSchema({ query: queryType, mutation: mutationType });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen('3000', () => console.log("Server is running"))
