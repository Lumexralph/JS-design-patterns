/**
 *  It is used to provide a simplified interface
 * to a complicated system.
 * Thinking about the front of a system not bothering about what is going on behind
 *  It hides the workings and chaos going on in a system and give just a tool to access it on the surface e.g API, JQUery
 * =============================================
 * Difference between facade/wrapper pattern and decorator is that no functionality is added, it is just covering it up and creating a simple interface for the object with same functionality.
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

const TaskService = () => ({
  complete(task) {
    task.completed = true;
    console.log(`Completing task ${task.name}`);
  },

  setCompleteDate(task) {
    task.completedDate = new Date();
    console.log(`${task.name} completed on ${task.completedDate}`);
  },

  notifyCompletion(task, user) {
    console.log(`Notifying ${user} of the completion of ${task.name} task`);
  },

  save(task) {
    console.log(`Saving the task: ${task.name}`);
  }
});

const TaskServiceWrapper = () => {
  const service = TaskService();

  const completeAndNotify = (task) => {
    service.complete(task);
      if(task.completed === true) {
        service.setCompleteDate(task);
        service.notifyCompletion(task, task.user);
        service.save(task);
      }
  };
   return completeAndNotify;

};

const newTask = new Task({
  name: 'Review Learners',
  priority: 1,
  project: 'Bootcamp',
  user: 'Olumide',
  completed: false,
});

const apiInterface = TaskServiceWrapper();
apiInterface(newTask);

console.log(newTask);