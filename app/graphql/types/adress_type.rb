# frozen_string_literal: true

module Types
  class AdressType < Types::BaseObject
    field :id, ID, null: false
    field :type_of_adress, String
    field :status, String
    field :entity, String
    field :number_and_street, String
    field :suite_or_appartment, String
    field :city, String
    field :postal_code, String
    field :country, String
    field :notes, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :state, String
    field :latitude, String
    field :longitude, String
  end
end
