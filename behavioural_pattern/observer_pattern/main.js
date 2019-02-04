const Task = require('./');

//Creating observers
const notificationService = () => {
  const message = 'Notifying';
  const update = (task) => {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };

  return {update};
};

const loggingService = () => {
  const message = 'Logging';
  const update = (task) => {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };

  return { update };
};

const auditingService = () => {
  const message = 'Auditing';
  const update = (task) => {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };

  return { update };
};

// using constructor pattern to create list of observers
class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  get(index) {
    if(index > -1 && this.observerList.length > index) {
      return this.observerList[index];
    }
  }

  count() {
    return this.observerList.length;
  }

}

// Using decorator pattern to extend the functionalities of Task to create our subject wrapper
class ObervableTask extends Task {
  constructor(data) {
    super(data);
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  notify(context) {
    const observerCount = this.observers.count();

    for (let i = 0; i < observerCount; i++) {
       this.observers.get(i)(context);
    }
  }

  save() {
    this.notify(this);
    super.save(this);
  }
}

// Using a mediator pattern pattern
/**
 * It controls communication between objects so neither object has to be coupled to the others
 * Allows for loosely coupled system
 * One object manages all communication
 * Allows many to many relationship
 * pub/sub publisher-subscriber
 */

 const mediator = (function (){
   const channels = {};

   const subscribe = (channel, context, func) => {
     // Check if channel doesn't exist before creating it
     if (!mediator.channels[channel]) {
        mediator.channels[channel] = [];
     }
     mediator.channels[channel].push({
       context,
       func,
     });
   };

   const publish = (channel) => {
     if (!this.channels[channel]) {
       return false;
     }

     // get the remaining items passed since we know the first is channel
     const args = Array.prototype.slice(arguments, 1);

     for(let i = 0; i < mediator.channels[channel].length; i++) {
       // for every subscriber in the channel execute their function
       const sub = mediator.channels[channel][i];
       sub.func.apply(sub.context, args);
     }
   };

   // using the revealing module pattern
   return {
     channels: {},
     subscribe,
     publish,
   };

 })();


// ======================================

const task1 = new ObervableTask({
  name: 'Create a demo for constructors',
  user: 'Olumide',
});

const audit = auditingService();
const log = loggingService();
const notification = notificationService();

// subscribe observers
// task1.addObserver(notification.update);
// task1.addObserver(audit.update);
// task1.addObserver(log.update);



// subscribe to a channel
mediator.subscribe('complete', notification, notification.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = () => {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
}
task1.complete();
