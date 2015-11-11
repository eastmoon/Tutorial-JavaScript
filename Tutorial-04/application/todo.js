/**
 * Created by EastMoon on 2015/11/4.
 */
// Create module "todoApp".
// https://docs.angularjs.org/api/ng/function/angular.module
// angular.module(name, [requires], [configFn]);
angular.module('todoApp', [])
    // Create controller "TodoListController".
    .controller('TodoListController', function() {
        // Declare member variable
        var todoList = this;
        todoList.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        // Declare method "addTodo".
        todoList.addTodo = function() {
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
        };

        // Declare method "remaining".
        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        // Declare method "archive".
        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });