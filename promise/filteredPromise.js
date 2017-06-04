'use strict'


/**
 * Promise Without Failing
 */

const Promise = require('bluebird');
const Sleep = require('sleep');

const throttleInSeconds = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomValue = (Math.floor(Math.random() * (max - min)) + min);
  Sleep.sleep(randomValue);
  return randomValue;
}

const isBlacklisted = (name) => {
  console.log('throttling isBlacklisted', throttleInSeconds(1,3));
  return new Promise((pass, fail) => {
    pass(name === 'Trouble');
  })
};

const getFreebies = (name, membership) => {
  console.log('throttling getFreebies', throttleInSeconds(1,5));
  return new Promise((pass, fail) => {
      switch(membership) {
      case 'standard': pass([]);
      case 'premium': pass(['free drink']);
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
