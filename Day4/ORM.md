##ORM
* Object-relational mapping
* creates, in effect, a "virtual object database" that can be used from within the programming language.
* Mongoose for mongodb
* Sequelize for SQL


##SO Express and Nodejs
* Did I describe that very well ? 
* Lets looks at some pictures !
[System](https://pbs.twimg.com/media/Bt5ywJrIEAAKJQt.jpg)
[Not Just V8](https://winblogs.azureedge.net/win/2016/01/chakracore-architecture-1024x559.png)
[Total System](https://camo.githubusercontent.com/87a6cdbb3801eb4d1a5a712a70739da0fea31844/68747470733a2f2f692e696d6775722e636f6d2f6f7579504b6b662e706e67)
[Let's look at it another way](https://charwangles.files.wordpress.com/2014/08/node_way.jpg)
[One more](https://lh4.ggpht.com/-0kluKv3A_IKreWd67UlGHiUl01zg_69Z-CyeI1aerTlVhk6wbs6ac2NGnaBvHRqdg=w300)

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
