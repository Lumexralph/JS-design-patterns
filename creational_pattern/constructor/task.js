/**
 * This pattern constructs new objects
 * Adapts creation to situations
 *
 * Drawbacks
 * =========
 * properties and methods are recreated on every instance or object created
 *
 * Prototype: An encapsulation of properties an object links to.
 * store methods in the prototype to avoid duplication of methods on each instance of the class
 */

 // Dependencies
 const Repo = require('../module_pattern/taskRepository')();

 class Task {
   constructor(data) {
    this.name = data.name;
    this.completed = false;
   }

   complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
   }

   save() {
    Repo.save(this);
   }
 }

module.exports = Task;
