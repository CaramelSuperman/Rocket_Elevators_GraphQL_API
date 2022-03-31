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

con.connect()
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("Select * from customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     //   console.log("Addresses table")
//     });
//   });   

// Sequelize ->

// import Sequelize from 'sequelize';

// var db = {}

// const sequelize = new Sequelize(
//     'Rocket_Elevator_Information_System_development',
//     'root',
//     'Rolens123@',
//     {
//         host: 'localhost',
//         port: '3000',
//         dialect: 'mysql',
//         define: {
//             freezeTableName: true,
//         },
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000,
//         },
//         // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
//         operatorsAliases: false,
//     },
// )


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
    constructor( id, company_name, full_name_company_contact, company_contact_phone, email_company, company_description, full_name_service_technical_authority, technical_authority_phone, technical_authority_email, user_id, address_id) {
      this.id = id
      this.company_name = company_name;
      this.full_name_company_contact = full_name_company_contact;
      this.company_contact_phone = company_contact_phone;
      this.email_company = email_company;
      this.company_description = company_description;
      this.full_name_service_technical_authority = full_name_service_technical_authority;
      this.technical_authority_phone = technical_authority_phone;
      this.technical_authority_email = technical_authority_email;
      this.user_id = user_id;
      this.address_id = address_id;
      this.interventions = this.interventions

    }
  }

const CustomerInputType = new graphql.GraphQLInputObjectType({
    name: 'CustomerInput',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        company_name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        full_name_company_contact: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        email_company: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        company_description: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        full_name_service_technical_authority: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        technical_authority_phone: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        technical_authority_email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        user_id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        address_id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        //interventions: { type: new graphql.GraphQLNonNull(graphql.GraphQLList(InterventionType)) },
    }
  });
  
  const CustomerType = new graphql.GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        company_name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        full_name_company_contact: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        email_company: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        company_description: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        full_name_service_technical_authority: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        technical_authority_phone: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        technical_authority_email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        user_id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        address_id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    }
  });
  class Intervention {
    constructor( id, EmployeeID, BuildingID, BatteryID , ColumnID , ElevatorID , date_start, date_end, Result , Report , Status ) {
      this.id = id
      this.employeeID = EmployeeID;
      this.buildingID = BuildingID;
      this.batteryID = BatteryID;
      this.columnID = ColumnID;
      this.elevatorID = ElevatorID;
      this.date_start = date_start;
      this.date_end = date_end;
      this.result = Result;
      this.report = Report;
      this.status = this.Status

    }
  }

const InterventionInputType = new graphql.GraphQLInputObjectType({
    name: 'CustomerInput',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        employeeID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        buildingID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        batteryID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        columnID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        elevatorID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        date_start: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        date_end: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        result: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        report: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    }
  });
  
  const InterventionType = new graphql.GraphQLObjectType({
    name: 'Customer',
    fields: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        employeeID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        buildingID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        batteryID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        columnID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        elevatorID: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
        date_start: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        date_end: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        result: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        report: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        status: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    }
  });


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
      },
    //   cutomer: {
    //     type: CustomerType,
    //     args: {
    //         id: { type: graphql.GraphQLInt}
    //     },
    //     resolve: (parent, args) => customer.find(customer => customer.id === args.id)
    //   }
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
