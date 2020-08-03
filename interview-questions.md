# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model- View - Controller patttern is used for full-stack applications. The model is the database that holds the information, the view is the front end that shows the information, and the the controller holds the logic that updates or searches for the information in the model to present to the view. 

  Researched answer: Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model. https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_model/intro.md



2. What does it mean if an application has CRUD? What does CRUD stand for? 

  Your answer: If an application has CRUD, it has all of the functionality of the full-stack application including creating, reading, updating, and deleting (CRUD) abilities. 

  Researched answer: In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage. https://en.wikipedia.org/wiki/Create,_read,_update_and_delete



3. What is a migration? Why would you use one?

  Your answer: A migration is used to make updates to the model (aka table) in the database. It's used so that changes can be tracked.

  Researched answer: Migrations are files that run SQL commands. Rails maintains a history with the migrations that have already run, and those that need to be run. A migration is a file that is generated through a rails command that will allow you to change the schema. This can include (but not limited to) editing a column's name or data type, adding a new column or removing a column.https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_model/active_record_intro.md



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: A person "has many" computers. A computer "belongs to" a person. The computer would hold the foreign key.

  Researched answer: The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id and the data type should be integer. https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_model/associations.md



5. What is object-relational mapping?

  Your answer: Object-relational mapping is the middle man or a layer between a database language  and the language used in the application to translate requests to SQL to perform CRUD operations. Active record is the ORM used in Rails.

  Researched answer:
  ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.  https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_model/active_record_intro.md



6. What is a gem?

  Your answer: A gem is a a package manager that can install many different types of Ruby packages. Rails and RSPEC are 2 examples of packages that be be installed using gem.

  Researched answer: RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them. https://en.wikipedia.org/wiki/RubyGems



7. Why is it important to have validations in your application?

  Your answer: It's important to have validations in your application to prevent errors and for security reasons. Creating validations ensure for the presence of a value if required, and that only the correct datatypes are included, and can help malicious code from being entered into the database.

  Researched answer: Validations are used to ensure that only valid data is saved into your database. https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_model/validations.md




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
REST stands for Representational State Transfer
REST is a pattern to follow when structuring routes between the server and the client
RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests
The RESTful protocol is a pattern followed by developers to implement CRUD operations

- JSON
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. https://www.json.org/json-en.html

- API - a set of functions and procedures allowing the creation of applications that access the features or data of another application, or other service https://en.wikipedia.org/wiki/Application_programming_interface

- Endpoints
endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

- Strong params
Rails 4+ also have a feature known as "strong parameters" or "whitelisting". It is a way for us to manage exactly what goes into creating new object instances, and helps us keep unwanted information -- usually from malicious hackers -- out of the database. https://github.com/learn-academy-2020-charlie/Syllabus/blob/master/rails_fullstack/strong_parameters.md