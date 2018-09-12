//https://mongoosejs.com/docs/guide.html

var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
    text: {type: String, required: true, minlength: 1, trim: true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number, default: null}
})

var newTodo = new Todo({
    text: 'play Dota'
})

newTodo.save().then((doc) => {
        console.log('Saved todo', doc)
    }, (e) => {
        console.log('Error: Unable to save todo')
})

// var newTodo2 = new Todo({
//     text: 'play MHW',
//     completed: 'true',
//     completedAt: '123'
// })

// newTodo2.save().then((doc) => {
//         console.log('Save todo', JSON.stringify(doc, undefined, 3))
//     }, (e) => {
//         console.log('Error: Unable to save todo')
// })


//user ----------------------------

var User = mongoose.model('User', {
    email: {type: String, required: true, trim: true, minlength: 1},
})

var user = new User ({
    email: 'bryan@awyis.com'
})

user.save().then((doc) => {
        console.log('User saved', doc)
    }, (e) => {
        console.log('Error: Unable to add User')
})