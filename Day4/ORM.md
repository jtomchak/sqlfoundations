##ORM
* Object-relational mapping
* creates, in effect, a "virtual object database" that can be used from within the programming language.
* Mongoose for mongodb
* Sequelize for SQL

#Mongoose
* [LINK](http://mongoosejs.com)
* ```
var mongoose = require('mongoose');
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
*  