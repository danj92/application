module.exports = function() {
  const faker = require('faker');
  const data = {
    people: Array.from({ length: 6 }, (_, n) => {
      return {
        id: n + 1,
        name: faker.name.findName(),
      };
    }),
    users: Array.from({ length: 10 }, (_, n) => {
      return {
        id: n + 1,
        name: faker.name.findName(),
      };
    }),
  };
  return JSON.parse(JSON.stringify(data));
};
