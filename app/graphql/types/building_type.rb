# frozen_string_literal: true

module Types
  class BuildingType < Types::BaseObject
    field :id, ID, null: false
    field :Full_Name_of_the_building_administrator, String
    field :Email_of_the_administrator_of_the_building, String
    field :Phone_number_of_the_building_administrator, String
    field :Full_Name_of_the_technical_contact_for_the_building, String
    field :Technical_contact_email_for_the_building, String
    field :Technical_contact_phone_for_the_building, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :customer_id, Integer
    field :adress_id, Integer
    field :No_of_floors, Integer
  end
end
