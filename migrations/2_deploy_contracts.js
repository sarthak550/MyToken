const MyToken = artifacts.require("./MyToken.sol");
const MyTokenSale = artifacts.require("./MyTokenSale.sol");


module.exports = function (deployer) {
    deployer.deploy(MyToken, 1000000).then(function () {
        // 0.001 Eth
        const tokenPrice = 1000000000000000;
        return deployer.deploy(MyTokenSale, MyToken.address, tokenPrice);
    });
};
