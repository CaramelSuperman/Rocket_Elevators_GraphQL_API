# frozen_string_literal: true

module Types
  class FactInterventionType < Types::BaseObject
    field :id, ID, null: false
    field :employeeID, Integer
    field :buildingID, Integer
    field :batteryID, Integer
    field :columnID, Integer
    field :elevatorID, Integer
    field :start_Date_And_Time_Of_the_Intervention, GraphQL::Types::ISO8601DateTime
    field :end_Date_And_Time_Of_The_Intervention, GraphQL::Types::ISO8601DateTime
    field :result, String
    field :report, String
    field :status, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :adress, [AdressType], null: true
    field :adress, [AdressType], null: false
    field :buildingDetails, [DetailsbuildingType], null: true

    def adress
      Adress.where(id: object.buildingID)
    end
    def buildingDetails
      Detailsbuilding.where(id: object.buildingID)
    end


  end
end
