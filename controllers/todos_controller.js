// requiring express package- how you are able to access express methods within this file
var express = require('express');

var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
router.get('/', function(req, res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });

});

/* CREATE TODO */
router.post('/', function(req, res){
  var newTodo = {
        description: req.body.description,
        location: req.body.location,
        urgent: req.body.urgent
    };

    data.seededTodos.push(newTodo);
    // res.send("Create a new todo is working!");
    res.redirect('/todos');
});

/* NEW TODO */
router.get('/new', function(req, res){
  res.render('todos/new');
});

/* SHOW TODO */
router.get('/:id', function(req, res) {
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });

});

/* EDIT TODO */
router.get('/:id/edit', function(req, res) {
  res.render('todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id].description,
      location: data.seededTodos[req.params.id].location,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });
});

/* UPDATE TODO */
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.location = req.body.location;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
});

/* DELETE TODO */
router.delete('/:id', function(req, res) {
  data.seededTodos.splice(req.params.id, 1);

  res.redirect('/todos');
});

module.exports = router;














