/**
 * It is  used to encapsulate methods that are similar
 * It is used to create service
 * The methods are wrapped in a function to make them private
 * Like a database service like conection, CRUD, configuration
 */

 const repo = () => {
   const db = { };

   const get = (id) => {
     console.log(`Getting task: ${id}`);
     return {
       name: 'Build OS'
     };
   };

   const save = (task) => {
     console.log(`Saving ${task.name} to the database`);
   };

   return {
     get,
     save,
   };

 };

 module.exports = repo;