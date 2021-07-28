require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food main random noble come include praise army giggle'; 
let testAccounts = [
"0x95632dc6afcfd578a5c4db44bee9c7ef42d23933497cb2a1ac55ce2ce452d7e4",
"0xe65fbd314cce829b1c4443510c9d48b6b3fc323b26101c69ef3506765cc0e58b",
"0x084803d572363765b20725e041b7353d24336a5fbb10fb2e8a64739dc72076a3",
"0xa2ed1b88fb7712be5d777b84f11286684fa3b90afe32db28ffbeeb084759c32c",
"0x6e786f382113c51bf3770897b61c1fdee452658de017e0055b60d8b17c322aa2",
"0xce59523600d804de66bcd1e4e46f1a02826b9118c4e89749088b2e7a2ec3627a",
"0x89b8dfb68a4962090e60e7d8e5cb815fb32103338d38f8c56bf298c6afbc346c",
"0x63aaefde054db5a3960c102ead73f9f50a215e2b1772d111a12a1b6b45f00ff6",
"0x66552c418596d78a5b4b45acd84d38807196b3171d7ed30e7b277e56b2a7ccab",
"0xec0542898924a90fd102774c464b871491665a544f87bb2ddddfef1aafe25796"
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
            gas: 8000000,
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


