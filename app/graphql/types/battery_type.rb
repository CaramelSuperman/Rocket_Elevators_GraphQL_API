# frozen_string_literal: true

module Types
  class BatteryType < Types::BaseObject
    field :id, ID, null: false
    field :status, String
    field :date_of_commissioning, GraphQL::Types::ISO8601Date
    field :date_of_last_inspection, GraphQL::Types::ISO8601Date
    field :certificate_of_operations, String
    field :information, String
    field :notes, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :building_id, Integer
    field :employee_id, Integer
  end
end
