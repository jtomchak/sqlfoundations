##NoSQL
 * Not table based
 * Document Based
 * Pexible data model
 * higher scalability 
 * superior performance

##Let's compare!
  * All of these data models provide schema Pexibility.
  * The key-value and wide-column data model is opaque in the system - only the primary key can be queried.
  * The document data model has the broadest applicability.
  * The document data model is the most natural and most productive because it maps directly to objects in modern object-oriented languages.
  * The wide column model provides more granular access to data than the key value model, but less Pexibility than the document data model.

  ##Charts!
  [Mongo](http://makble.com/images/mongodb-advantages-disadvantages.png)
  [Compare](https://s-media-cache-ak0.pinimg.com/originals/cd/f0/1b/cdf01ba5ff75affe1400e812d36577a1.gif)

##NOSQL Types
  * Document Database
  * Key-Value Database (Redis)
  * Graph Database
  * Object Database


 ##Mongo Setup
  * Mongodb install [LINK](https://www.mongodb.com/download-center#previous)
  * Download Robo 3T [LINK](https://robomongo.org)
  * mlab and make an account [LINK](https://www.mlab.com)

  ---

  * Create **FREE** db on mlab
  * add admin user [LINK](https://www.dropbox.com/s/gb4q3uzufeb21jl/mlab.png?dl=0)

  ---

  * Connect Robo 3T -> mlab db
  * mongodb://<dbuser>:<dbpassword>@ds139262.mlab.com:39262/<databasename>
  * see [LINK](https://www.dropbox.com/s/zbi0omwh957qglv/mlab2.png?dl=0)
  * see [LINK](https://www.dropbox.com/s/zbi0omwh957qglv/mlab2.png?dl=0)


  * Mongo import data
    mongoimport -h ds139262.mlab.com:39262 -d <databasename> -c <collections> -u <user>  -p <password> --file primer-dataset.json


  ##Mongo Commands
    * db.[collection_name].insertOne([document_schema])//to insert new record
    * db.[collection].insertMany( [ {document1}, {document2}, … {documentN}]) //to insert many at once

    //TODO: Embedded document
    * db.resturants.find({ "borough": "Manhattan" })

    * db.collection.aggregate( [ <stage1>, <stage2>, ... ] )
    * where <stage1> is a sequentially data processing step
    * 
    * $group, $match, 
    //TODO: Find all 'Brazilian' cusisine and group by bourough with count



