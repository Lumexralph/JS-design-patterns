const taskHandler = require('./taskHandler');
const repo = require('./demo_singleton');

repo.save('fromMain');
repo.save('fromMain');
taskHandler.save()
taskHandler.save()
taskHandler.save()
