/**
 * Encapsulates the calling of a method as an object
 * Fully decouples the execution from the implementation
 * Allows for less fragile implementations
 * Support undo operations
 * Supports auditing and logging of operations
 */

const repo = {
  tasks: {},
  commands: [],
  get(id) {
    console.log(`Getting task ${id}`);
    return {
      name: 'new task from db',
    };
  },

  save(task) {
    repo.tasks[task.id] = task;
    console.log(`Saving ${task.name} to the db`);
  }
};

repo.execute = (name) => {
  const args = Array.prototype.slice.call(arguments, 1);

  repo.commands.push({
    name,
    obj: args[0],
  });

  if(repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false,
})

repo.execute('save', {
  id: 2,
  name: 'Task 1',
  completed: false,
})