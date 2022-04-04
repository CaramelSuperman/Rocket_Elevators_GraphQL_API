# frozen_string_literal: true

module Types
  class EmployeeType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String
    field :last_name, String
    field :title, String
    field :email, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_id, Integer
    field :interventions, [FactInterventionType], null: true

    def interventions
      FactIntervention.where(employeeID: object.id)
    end
  end
end
