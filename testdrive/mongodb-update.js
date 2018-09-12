const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log('Unable to connect to DB server')
    }
    console.log('Success - Connected to DB server')
    const db = client.db('TodoApp')

    //findOneAndUpdate(filter, update, options, callback)
    //http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate

    //"update operators" ($set, $inc, $mul, etc.)
    //https://docs.mongodb.com/manual/reference/operator/update/
    
    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5b98a8c977f19a4f3103c196')
        }, {
                $set: {
                    completed: 'true'
                }
        }, {
                returnOriginal: false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 3))
        })

    client.close()

})