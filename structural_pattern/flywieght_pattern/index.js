/**
 * It helps to solve have non unique data
 * It helps to share data across objects
 * It results ina smaller memory usage
 * It is only very useful if you have large amount of objects like 200 and above taking up too much amount in memory
 */


class Flyweight {
  constructor(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
  }
}

//Create a flyweight factory
const flyWeightFactory = () => {
  /**
   * it will create a new flyweight
   * it will return the flyweight
   * it will keep count
   */

   const flyweights = {};

   const get = (project, priority, user, completed) => {
     // get the common attributes
     if(!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
     }

     return flyweights[project + priority + user + completed];

   };

   const getCount = () => {
     let count = 0;
     for (const flyweight in  flyweights) {
       count += 1;
     };

     return count;
   };

   return {
     get,
     getCount,
   };

}

const flyweightsFactory = flyWeightFactory();

class Task {
  // sharing pieces of objects across objects
  constructor(data) {
    this.name = data.name;
    this.flyweight = flyweightsFactory.get(data.project, data.priority, data.user, data.completed);
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
  }
}

const TaskCollection = () => {
  const tasks = {};
  let count = 0;

  const add = (data) => {
    tasks[data.name] = new Task(data);
    count += 1;
  }

  const get = (name) => tasks[name];

  const getCount = () => count;

  return {
    add,
    get,
    getCount,
  };
}

const tasks = TaskCollection();

const projects = ['none', 'courses', 'training', 'project'];
const priorities = [1, 2, 3, 4, 5, 6];
const users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
const completed = [true, false];

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 100000; i++) {
  tasks.add({
    name: `name ${i}`,
    priority: priorities[Math.floor((Math.random() * 5))],
    project: projects[Math.floor((Math.random() * 4))],
    user: users[Math.floor((Math.random() * 4))],
    completed: completed[Math.floor((Math.random() * 2))]
  });
}

const afterMemory = process.memoryUsage().heapUsed;
console.log(`Used memory ${(afterMemory - initialMemory) / 1000000}`);

console.log(`tasks ${tasks.getCount()}`);
console.log(`flyweights ${flyweightsFactory.getCount()}`);