require 'pg'



class FactIntervention < ApplicationRecord
    
    def self.all
        db = PG.connect(dbname: 'database_pg', user: 'rolens', password: 'Rolens123@')
        fact_interventions = Array.new
        results = db.exec("SELECT * FROM fact_interventions")
        results.each do |fact_intervention|
            fact_intervention = self.new
            fact_intervention.id = row["id"]
            fact_intervention.start_Date_And_Time_Of_the_Intervention = row["start_Date_And_Time_Of_the_Intervention"]
            fact_intervention.end_Date_And_Time_Of_The_Intervention = row["end_Date_And_Time_Of_The_Intervention"]
            fact_interventions << fact_intervention
        end
    fact_interventions
    end
end