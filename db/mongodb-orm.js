const moongoose = require('moongoose');
const Schema = moongoose.schema; 

moongoose.connect('mongodb://localhost/mongodb-orm'); 
moongoose.connect.once('open', () => { 
  console.log('Connected with MongoDB ORM - mongodb-orm');
}); 

var schema = new Schema({ 

}); 

module.exports = function(data) { 
  var db = moongoose.model('db', schema); 

  db.insertMany({}, function(err) { 
    if (err) return err; 
    moongoose.connection.close(); 
  });
}; 