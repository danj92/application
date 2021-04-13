module.exports = function() {
  const faker = require('faker');
  const data = {
    people: Array.from({ length: 6 }, (_, n) => {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
    users: Array.from({ length: 20 }, (_, n) => {
      return {
        id: n,
        name: faker.name.findName(),
      };
    }),
  };
  return JSON.parse(JSON.stringify(data));
};
