// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if (err) {
        return console.log('Unable to connect to DB server')
    }
    console.log('Success - Connected to DB server')
    const db = client.db('TodoApp')

    db.collection('Users').find().count().then((count)=> {
        console.log(`Number of todos ${count}`)
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })

    // db.collection('Users').find({_id: new ObjectID('5b97867884bdb539a520ca03')}).toArray().then((docs)=> {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 3))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert ToDo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 3))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Bryan3',
    //     age: '22',
    //     location: 'over there'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    client.close()
})
