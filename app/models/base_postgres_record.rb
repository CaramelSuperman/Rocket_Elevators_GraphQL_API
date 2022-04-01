class BasePostgresRecord < ActiveRecord::Base
    
#     .establish_connection( 
#     adapter: "postgresql",
#     encoding: "utf8",
#     pool: 5,
#     host:  "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
#     username: "codeboxx",
#     password: "Codeboxx1!"
# )
    self.abstract_class = true

    conn = PG::Connection.open(:host => "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com", :user => "codeboxx", :password => "Codeboxx1!", :dbname => "EricGaudreault")

    # establish_connection POSTGRES_DB
    # Base.establish_connection( 
    #     adapter: "postgresql",
    #     encoding: "utf8",
    #     pool: 5,
    #     host:  "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
    #     username: "codeboxx",
    #     password: "Codeboxx1!"
    # )
end