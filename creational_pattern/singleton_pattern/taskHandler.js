const repo = require('./demo_singleton');

const taskHandler = () => ({
  save() {
    repo.save('Coming from taskhandler');
  }
});

module.exports = taskHandler();
