autoscale: true

## ORM
* Object-relational mapping
* creates, in effect, a "virtual object database" that can be used from within the programming language.
* Mongoose for mongodb
* Sequelize for SQL

--- 

## Nodejs or Node.js or NodeJS
> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

---

## Use cases
* Following are the areas where Node.js is proving itself as a perfect technology partner.

* I/O bound Applications

* Data Streaming Applications

* Data Intensive Real-time Applications (DIRT)

* JSON APIs based Applications

* Single Page Applications

---

![inline](https://images.idgesg.net/images/article/2017/07/nodejs-server_lg-100729813-large.jpg)

---

## NPM 
* The NPM registry hosts almost half a million packages of free, reusable Node.js code, which makes it the largest software registry in the world. 
* NPM can manage packages that are local dependencies of a particular project, as well as globally installed JavaScript tools.

---

## SO Express and Nodejs
* Did I describe that very well ? 
* Lets looks at some pictures !

---


![inline](https://pbs.twimg.com/media/Bt5ywJrIEAAKJQt.jpg)

---

![inline](https://winblogs.azureedge.net/win/2016/01/chakracore-architecture-1024x559.png)

---

![inline](https://camo.githubusercontent.com/87a6cdbb3801eb4d1a5a712a70739da0fea31844/68747470733a2f2f692e696d6775722e636f6d2f6f7579504b6b662e706e67)

---


![inline](https://charwangles.files.wordpress.com/2014/08/node_way.jpg)

---

![inline](https://image.slidesharecdn.com/introtonode-140914093424-phpapp01/95/intro-to-nodejs-14-638.jpg?cb=1410687757)

---

![inline](https://lh4.ggpht.com/-0kluKv3A_IKreWd67UlGHiUl01zg_69Z-CyeI1aerTlVhk6wbs6ac2NGnaBvHRqdg=w300)

---

# Mongoose
* [LINK](http://mongoosejs.com)

```javascript
var Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})
```

---
# Saving stuff

```javascript
var mongoose = require('mongoose');
var otherController = require('./otherController');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
```
---
# Schema

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```
---
# Now it's your turn
1. install stuff
  * `npm install -g express`
  * `npm install -g express-generator`

2. **FOLLOW** this [LINK](https://expressjs.com/en/starter/generator.html)

