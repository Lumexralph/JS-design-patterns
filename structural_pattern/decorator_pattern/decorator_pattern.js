/**
 * It is ued to add new functionality to an object without being obtrusive
 * It helps with more complete inheritance
 * Wraps the object
 * Allows extended functionality of an existing object without breaking it
 */

class Task {
  constructor(name) {
    this.name = name;
    this.completed = true;
  }

  complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
  }

  save() {
    console.log(`Saving task ${this.name}`);
  }
}


// create a new constructor
// also referencing the constructor of Task, creating another class of the main class
// in ES 5 it will be Task.call(this, name)
// Urgent.prototype = Object.create(Task.prototype); // inheritance by access the prototype object
class UrgentTask extends Task {
  constructor(name, priority) {
    super(name); // access the constructor of the parent
    this.priority = priority;
  }

  notify() {
    console.log('Notifying important people');
  }

  save(){
    this.notify();
    super.save(); // accessing the save method on the class
    super.complete();
  }

}

const urgentT = new UrgentTask('Clean up', 2);
console.log(urgentT);
urgentT.save();
