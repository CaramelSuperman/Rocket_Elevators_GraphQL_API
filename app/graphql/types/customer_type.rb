# frozen_string_literal: true

module Types
  class CustomerType < Types::BaseObject
    field :id, ID, null: false
    field :Customers_Creation_Date, String
    field :Company_Name, String
    field :Full_Name_of_the_company_contact, String
    field :Company_contact_phone, String
    field :Email_of_the_company_contact, String
    field :Company_Description, String
    field :Full_Name_of_servive_Technical_Authority, String
    field :Technical_Manager_Email_for_Servive, String
    field :Technical_Manager_Email_for_Service, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_id, Integer
    field :adress_id, Integer
  end
end
