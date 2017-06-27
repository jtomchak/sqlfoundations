##Joins
  * *Join:* SQL Command to join two or more tables together.
  * *Inner Join:* SQL command to join two tables, only including records which have data present in both tables.
    * **An inner join only includes the specified columns from a row if it can be paired up with a row in the joined table.**
  * *Outer Join:* SQL command to join two tables, including all of the records from one table, along with the matching values from the other.
    * **if a matching row exists in the other table, then those columns are included as well.**

SELECT Name, Title
FROM tracks JOIN albums
ON tracks.AlbumId = albums.AlbumId //USING (AlbumId)
WHERE ArtistId = 1

SELECT title, (first_name || " " || last_name) as name
FROM books JOIN users
ON books.user_id = users.user_id

##Views

##Transactions

##Procedures

##HandsOnChallenge