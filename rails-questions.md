# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb to send to the server via the url
library - url
:id - parameter to pass in
book - name of controller
show - name of method found in controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

ONE: rails generate migration name_file_that_describes_changes
TWP: Navigate to the new file with the name we just gave it in the db/migrate directory 
THREE: Update the change method in the class to add the column
FOUR: rails db:migrate



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails g model Person shirt:string pants:string shoes:string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

Go to the Person class in App > Models, then add validations inside the class
validates :shirt, :pants, :shoes, presence: true 



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The rails generate command takes the name of the table, the name of each column, and the datatype of each column as arguments. The name of the table is uppercase and singular by convention.
The table that is gerenerated in the schema is lowercase and plural.