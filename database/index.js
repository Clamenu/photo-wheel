var mysql = require('mysql');


var db = mysql.createConnection({
	multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'nick',
  database: 'photos'
});


db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('connected to db');
});


module.exports = db;
// for(var i = 0; i < data.businessNames.length; i++) {
//   var random = Math.floor(Math.random() * data.photos.length); 
//   var each = new Restaurant({ name: data.businessNames[i] });
//   db.query(`INSERT INTO restaurants (name) VALUES (${data.businessNames[i]})`)
// }


// for(var i = 0; i < data.users.length; i++) {
// 	var eachUser = new User({ name: data.users[i].name, elite: data.users[i].elite, friends: data.users[i].friends, reviews: data.users[i].reviews})
//   eachUser.save();
// }

