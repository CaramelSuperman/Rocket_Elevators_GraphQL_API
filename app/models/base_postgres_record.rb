class BasePostgresRecord < ActiveRecord::Base
    self.abstract_class = true

    conn = PG::Connection.open(:host => "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com", :user => "codeboxx", :password => "Codeboxx1!", :dbname => "EricGaudreault")

    # establish_connection POSTGRES_DB
    establish_connection conn
end