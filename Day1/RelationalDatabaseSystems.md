## Debugging Steps
* ReferenceError: inquire is not defined
* Users/jtomchak/Documents/Node/weatherCommander/sample.js:25
  inquirer.prompt(questions).then(function(answers.value) {
SyntaxError: Unexpected token .

---

## Where to start ? 
* Look through the WHOLE ERROR
* Google the error
* check with coworkers 
* more google searching

---

## Needed
* SQLite(http://www.sqlite.org/2017/sqlite-dll-win64-x64-3190300.zip)
* db browser for SQL [LINK](http://sqlitebrowser.org/)

---

## Relational Database Systems 
* Structured Query Language
* concept called a 'transaction'

---

![inline](http://4.bp.blogspot.com/-G1gC5bW1Z38/VedLel7FRlI/AAAAAAAAd14/IIhA1nDJMO4/s1600/blocking%2Bin%2Bsql%2Bserver.png)

---

![inline](http://dbakevlar.com/wp-content/uploads/2017/06/with-rowlick.png)

---


## Offerings
* MySQL 
* Postgresql 
* SQLite 
* Oracle 
* Microsoft SQL Server 
* IBM DB2
* Sybase ASE

---


## DDL Data Definition Language
* *Create:* For the creation of tables and other objects in your database. There are over 50 different objects you can create within a database.
* *Alter:* Many of the objects you create can be altered after creation, but not all. The benefit here is that altering an object is an alternative to dropping and re-creating an object. This can come in handy when an object may contain thousands or millions of rows of data.
* *Drop:* The opposite of create, and analogous to a delete. If you drop an object, you not only delete the object definition but also any data stored inside of it.

---

## DML Data Manipulation Language
* *Insert:* For adding data to a table.
* *Select:* For retrieving data from a table.
* *Delete:* For removing data from a table.
* *Update:* Alters data in a row of a table, 'updating' existing values to the new values you provide.

---

```sql
SELECT user_id, count(user_id) FROM books GROUP BY user_id
```

---

## Select
* SELECT [column names] FROM table_name
* WHERE for filtering
  * SELECT [column names] FROM table_name WHERE [row restrictions]
* Fuzzy matching  
  * SELECT Name FROM tracks WHERE Name LIKE 'the%'
* Ordering
  * SELECT Name FROM tracks ORDER BY Name DESC
* GroupBy
  * SELECT ArtistId, count(ArtistId) FROM albums GROUP BY ArtistId
  //temp column ArtistId

<!--SELECT user_id, count(user_id) FROM books GROUP BY user_id-->

---


## Insert / Create
* INSERT INTO [table name] (column list) VALUES (value list)
* CREATE TABLE customersToCall (Name VARCHAR(60), Phone VARCHAR(24))
* SELECT (FirstName || ' ' ||  LastName) as Name, Phone from customers where Country = 'Brazil'

---

## Excercise
## MAKING TABLES


---

```sql
users:
  * first name
  * last name
  * address
  * phone number

books:
  * title
  * author
  * genre
  * usersId
  * publishDate

  ```