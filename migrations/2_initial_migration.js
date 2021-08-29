// migrations/2_deploy.js
const Hello = artifacts.require('Hello');

module.exports = async function (deployer) {
  await deployer.deploy(Hello , 'Hello');
};