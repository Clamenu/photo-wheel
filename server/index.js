const express = require('express');
const app = express();
const parser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3005',
  optionsSuccessStatus: 200
}

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/:idOrName', express.static('./public'));

app.get('/:idOrName/restaurants', cors(corsOptions), (req, res) => {
  if(isNaN(parseInt(req.params.idOrName))) {
    db.getAllPicturesByName(req.params.idOrName, (err,data) => {
      if(err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  } else {
    db.getAllPicturesById(req.params.idOrName, (err, data) => {
    	if(err) {
    		res.send(err);
    	} else {
  		  res.send(data); 		
    	}
    });   
  }
});

app.get('/:idOrName/users', cors(corsOptions), (req, res) => {
  db.getAllUsers(req.query.users, (err, data) => {
  	if(err) {
  		res.send(err);
  	} else {
		  res.send(data); 		
  	}
  });
});

app.get('/api/photos/:idOrName/restaurants', cors(corsOptions), (req, res) => {
  if(isNaN(parseInt(req.params.idOrName))) {
    db.getAllPicturesByName(req.params.idOrName, (err,data) => {
      if(err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  } else {
    db.getAllPicturesById(req.params.idOrName, (err, data) => {
      if(err) {
        res.send(err);
      } else {
        res.send(data);     
      }
    });   
  }
});

app.get('/api/photos/:idOrName/users', cors(corsOptions), (req, res) => {
  db.getAllUsers(req.query.users, (err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.send(data);     
    }
  });
});


const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Connected on port 3001"));

module.exports.app = app;