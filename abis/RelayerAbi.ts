export const RelayerAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"dao","type":"address"},{"internalType":"address","name":"ormp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"msgHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"params","type":"bytes"},{"indexed":false,"internalType":"bytes32[32]","name":"proof","type":"bytes32[32]"}],"name":"Assigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approve","type":"bool"}],"name":"SetApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"chainId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"baseGas","type":"uint64"},{"indexed":false,"internalType":"uint64","name":"gasPerByte","type":"uint64"}],"name":"SetDstConfig","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"chainId","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"dstPriceRatio","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"dstGasPriceInWei","type":"uint128"}],"name":"SetDstPrice","type":"event"},{"inputs":[],"name":"PROTOCOL","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvedOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"msgHash","type":"bytes32"},{"internalType":"bytes","name":"params","type":"bytes"}],"name":"assign","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"configOf","outputs":[{"internalType":"uint64","name":"baseGas","type":"uint64"},{"internalType":"uint64","name":"gasPerByte","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"toChainId","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"encoded","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"isApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"priceOf","outputs":[{"internalType":"uint128","name":"dstPriceRatio","type":"uint128"},{"internalType":"uint128","name":"dstGasPriceInWei","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"channel","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"fromChainId","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"toChainId","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"encoded","type":"bytes"}],"internalType":"struct Message","name":"message","type":"tuple"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"relay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approve","type":"bool"}],"name":"setApproved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"uint64","name":"baseGas","type":"uint64"},{"internalType":"uint64","name":"gasPerByte","type":"uint64"}],"name":"setDstConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"uint128","name":"dstPriceRatio","type":"uint128"},{"internalType":"uint128","name":"dstGasPriceInWei","type":"uint128"}],"name":"setDstPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
