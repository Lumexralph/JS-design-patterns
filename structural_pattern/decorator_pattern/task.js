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

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// decorating or adding additional functions to a new object
const urgentTask = new Task('Urgent Task');
urgentTask.priority = 6;
urgentTask.notify = () => console.log('Notifying important people');

urgentTask.complete();
urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

urgentTask.save();
