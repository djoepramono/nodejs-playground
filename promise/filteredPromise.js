'use strict'

const Promise = require('bluebird');

const isBlacklisted = (name) => {
  return new Promise((pass, fail) => {
    pass(name === 'Trouble');
  })
};

const getFreebies = (name, membership) => {
  return new Promise((pass, fail) => {
      switch(membership) {
      case "standard": pass([]);
      case "premium": pass(["free drink"]);
      default: fail(`Not a member: ${name}`);
    }
  });
};

const check = (name, membership, callback) => {
  console.log(`Checking ${name}`);
  return Promise.all([
    isBlacklisted(name),
    getFreebies(name, membership)
  ])
  .spread((isBanned, freebies) => `${name} - is banned? ${isBanned} - Freebies: ${freebies}`)
  .then(callback)
  .catch(err => console.error("errors",err))
};

[
  {name: 'John', membership: 'premium'},
  {name: 'Trouble', membership: 'premium'},
  {name: 'George', membership: 'standard'},
  {name: 'Jimmy'}
].map(person => check(person.name,
    person.membership,
    (checkResult) => {
      console.log(checkResult)
    })
  );
