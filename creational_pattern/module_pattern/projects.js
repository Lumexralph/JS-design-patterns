/**
 * It is  used to encapsulate methods that are similar
 * It is used to create service for projects
 * The methods are wrapped in a function to make them private
 * Like a database service like connection, CRUD operation, configuration
 */

const project = () => {
  const db = { };

  const get = (id) => {
    console.log(`Getting project: ${id}`);
    return {
      name: 'Software Architecture'
    };
  };

  const save = (project) => {
    console.log(`Saving ${project.name} to the database`);
  };

  return {
    get,
    save,
  };

};

module.exports = project;