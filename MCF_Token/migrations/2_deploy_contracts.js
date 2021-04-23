const MCFToken = artifacts.require("MCFToken");

module.exports = function (deployer) {
  deployer.deploy(MCFToken);
};
