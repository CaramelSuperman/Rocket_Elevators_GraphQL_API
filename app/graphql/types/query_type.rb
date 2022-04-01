module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me

    field :adresses, [AdressType], null: false,
    description: "Return all the addresses"
    def adresses
      Adress.all
    end

    field :adress, Types::AdressType, null: false do
      argument :id, ID, required: true
    end

    def adress(id:)
      Adress.find(id)
    end

    field :customers, [CustomerType], null: false,
    description: "Return all the addresses"
    def customers
      Customer.all
    end
    field :customer, Types::CustomerType, null: false do
      argument :id, ID, required: true
    end

    def customer(id:)
      Customer.find(id)
    end

    field :interventions, [FactInterventionType], null: false,
    description: "Return all the interventions"
    def interventions
      FactIntervention.all
    end
    field :intervention, Types::FactInterventionType, null: false do
      argument :employeeID, Integer
    end

    def intervention(id:)
      FactIntervention.find(employeeID)
    end
  end
end
