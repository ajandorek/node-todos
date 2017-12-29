var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Play my switch',
  completed: false,
  completedAt: 1212341234
});

newTodo.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('Unable to save todo')
});