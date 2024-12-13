const SimpleStorage = artifacts.require("SimpleStorage");
module.exports = async function(deployer, network, accounts)
{
 await deployer.deploy(SimpleStorage);
 const instance = await SimpleStorage.deployed();
 await instance.set(122);
 console.log("Initial value set to 122");
};
