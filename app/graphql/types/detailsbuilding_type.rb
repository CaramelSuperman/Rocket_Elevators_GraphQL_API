# frozen_string_literal: true

module Types
  class DetailsbuildingType < Types::BaseObject
    field :id, ID, null: false
    field :information_key, String
    field :value, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :building_id, Integer
  end
end
