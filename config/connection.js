const { connect, connection } = require('mongoose');

// have to use the ip address instead of 'localhost' because express hates me
connect('mongodb://127.0.0.1:27017/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
