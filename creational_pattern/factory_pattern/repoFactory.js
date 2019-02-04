/**
 * This is the pattern used to simplify object creation
 * Creating different objects based on need
 * Different repository creation
 */

 const repoFactory = () => {
   const repoList = [
     { name: 'task',
       source: '../module_pattern/taskRepository',
     },
     { name: 'user',
       source: '../module_pattern/users',
     },
     { name: 'project',
       source: '../module_pattern/projects',
     }
   ];

   repoList.forEach((repo) => {
     this[repo.name] = require(repo.source)()
   });

   return this;

 };

 module.exports = repoFactory();