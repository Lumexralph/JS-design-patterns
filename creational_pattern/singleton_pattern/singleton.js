/**
 * This pattern is used to restrict an
 * object to one instance of that object
 * across the application
 * It is an entity that remembers the last time
 * you used and object and returns it
 */

 const TaskRepo = (() => {
   let taskRepo;
   const createRepo = () => new Object('Task');

   return {
    getInstance() {
      if(!taskRepo) {
        taskRepo = createRepo();
      }

      return taskRepo;
    }
   };

 })();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if(repo1 === repo2) {
  console.log('Same TaskRepo');
}