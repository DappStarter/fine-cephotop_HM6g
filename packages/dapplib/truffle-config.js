require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food curve return payment update hunt light army giant'; 
let testAccounts = [
"0x22cde2357b2463d5b0dae4f9e3facab38d359c4432390cec07d1845194eebc53",
"0x87d75cacf54085f6c62d5b19971872dca1481533e82dc02c868c339b3ff55c60",
"0x92882547254b87b27cfe0029820a26dc9ea121cb186967b26b4456aff930cd02",
"0x21269f8cd1b10d4bbc8feee0d1881f75b90fc1c681a18d04dc0791a486e6943e",
"0xfaeeeab43959f85e5ea99a0425ca6b3c23459b18053663a0146c73c0f4f44a3d",
"0xcce50cdd3ee2d8e3441d34669119d3a910feb8fc8b31ac76b45b0919d42fd2a7",
"0x9d9614edd355eb67e821e84b77c06d32060be6888fe9e03deef3a3b8e0502f28",
"0x30ecfe546399d4c6639e22afa89f43a55c3e96494eeb0f8307e04f34206f573b",
"0x979a88cb506b17525684e09912ed6855d34eafaf365c813a847310a4480d5e7d",
"0x6fe4792fe34024947e9d6ec5b895720a940bf9eaf8b8d7665c5d474b3732f76e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


