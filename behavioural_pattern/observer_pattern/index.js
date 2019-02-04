/**
 * Allows a collection of objects to watch an object
 * and be notified of changes.
 *
 * It allows for a loosely coupled system
 * One object is the focal point
 * Group of objects watch for changes
 */

class Task {
  constructor(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
  }

  complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
  }

  save() {
    console.log(`Saving task ${this.name}`);
  }
}

module.exports = Task;