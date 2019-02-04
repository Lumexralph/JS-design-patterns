/**
 * It is  used to encapsulate methods that are similar
 * It is used to create service for users
 * The methods are wrapped in a function to make them private
 * Like a database service like connection, CRUD operation, configuration
 */

const user = () => {
  const db = { };

  const get = (id) => {
    console.log(`Getting user: ${id}`);
    return {
      name: 'Olumide Ogundele'
    };
  };

  const save = (user) => {
    console.log(`Saving ${user.name} to the database`);
  };

  return {
    get,
    save,
  };

};

module.exports = user;