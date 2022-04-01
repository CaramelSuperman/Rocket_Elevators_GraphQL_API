POSTGRES_DB = YAML.load_file(File.join(Rails.root, "config", "postgres_database.yml"))[Rails.env]
# POSTGRES_DB = ActiveRecord::Base.configurations["postgres_#{Rails.env}"]