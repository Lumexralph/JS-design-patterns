// Node uses the CommonJS module system
const Task = require('./task');
const repoFactory = require('../factory_pattern/repoFactory');

const task1 = new Task(repoFactory.task.get(1));
const user = repoFactory.user.get(1);
const project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

task1.save();
