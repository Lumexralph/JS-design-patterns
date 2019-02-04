const repo = () => {
  let called = 0;

  const save = (task) => {
    called += 1;
    console.log(`Saving ${task}, called ${called} times`);
  }

  console.log('Newing up task repo');
  return { save };
};

module.exports = repo();
