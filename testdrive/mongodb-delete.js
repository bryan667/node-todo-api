const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log('Unable to connect to DB server')
    }
    console.log('Success - Connected to DB server')
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'play Dota'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 3))
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'play Dota'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 3))
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(JSON.stringify(result, undefined, 3))
    })

    client.close()

})