class BasePostgresRecord < ActiveRecord::Base
    self.abstract_class = true
    establish_connection POSTGRES_DB
end