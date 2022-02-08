const MongoClient = require('mongodb').MongoClient;

//Establishing a Database Connection using MongoDB...
console.log("DB Layer")
const uri = "mongodb+srv://sohaibkashif97:sohaibmongodb@cluster0.ebnvy.mongodb.net/projects?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1 });

client.connect((err, db) => {
    if (!err) {
        console.log('Database Connected')
    } else {
        console.log('[error]', err)
    }
});

module.exports = client;
