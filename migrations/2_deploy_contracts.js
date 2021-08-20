//Import Contractconst DStorage = artifacts.require("DStorage");
const Wedding = artifacts.require("Wedding");

module.exports = function (deployer) {
  //Deploy Contract
  deployer.deploy(Wedding);
};
