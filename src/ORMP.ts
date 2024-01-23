import { ponder } from "@/generated";

ponder.on("ORMP:AppConfigUpdated", async ({ event, context }) => {
  console.log(event.args);
});

// {
//   name: 'DefaultConfigUpdated',
//   args: {
//     oracle: '0x6f82112cD16C3Ff5484520BA7B0240F7aD14686C',
//     relayer: '0xeF728bAB47BE9fd808d028d952A3E90d7d9974Af'
//   },
//   log: {
//     address: '0xf19177bE21F1393d255d483C924ea7f6DDbc7032',
//     blockHash: '0x00000000025d8edfa379eb1f2ca582e6d8f7e1b894d213aa70d8b299ebf455a7',
//     blockNumber: 39685855n,
//     data: '0x0000000000000000000000006f82112cd16c3ff5484520ba7b0240f7ad14686c000000000000000000000000ef728bab47be9fd808d028d952a3e90d7d9974af',
//     id: '0x00000000025d8edfa379eb1f2ca582e6d8f7e1b894d213aa70d8b299ebf455a7-0x0',
//     logIndex: 0,
//     removed: false,
//     topics: [
//       '0x504f152883e6158786ddfcce63f4d4d95ce8e404b1f6e6365a06f63849b7cb95'
//     ],
//     transactionHash: '0xafbc247716e033f1a33bb6e35aa95c066e6804005073b644c567fca4a8e42712',
//     transactionIndex: 0
//   },
//   transaction: {
//     blockHash: '0x00000000025d8edfa379eb1f2ca582e6d8f7e1b894d213aa70d8b299ebf455a7',
//     blockNumber: 39685855n,
//     from: '0x4f85AfFFf61cE6a1091A43421D62f26F69c2aB49',
//     gas: 42928n,
//     hash: '0xafbc247716e033f1a33bb6e35aa95c066e6804005073b644c567fca4a8e42712',
//     input: '0x4ea599790000000000000000000000006f82112cd16c3ff5484520ba7b0240f7ad14686c000000000000000000000000ef728bab47be9fd808d028d952a3e90d7d9974af',
//     nonce: 0,
//     r: '0xaf48afafb735e8aa55ba143ac561b84a3f608f812575ec59f290f75a9b1cf0a7',
//     s: '0x6145da73ac370b844adf5632259a340f9a0901a52e536caeaeed9cb31d6c0d2d',
//     to: '0xf19177bE21F1393d255d483C924ea7f6DDbc7032',
//     transactionIndex: 0,
//     value: 0n,
//     v: 27n,
//     type: 'legacy',
//     gasPrice: 420n
//   },
//   block: {
//     baseFeePerGas: 0n,
//     difficulty: 0n,
//     extraData: '0x',
//     gasLimit: 118000000n,
//     gasUsed: 42928n,
//     hash: '0x00000000025d8edfa379eb1f2ca582e6d8f7e1b894d213aa70d8b299ebf455a7',
//     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
//     miner: '0x839D08f05AdE5b365E81D1A66c20af13EBb2991d',
//     mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
//     nonce: '0x0000000000000000',
//     number: 39685855n,
//     parentHash: '0x00000000025d8edea2034c08c31d660ed8dd9a585a43ecac53a529f97c9b4a2e',
//     receiptsRoot: '0x0000000000000000000000000000000000000000000000000000000000000000',
//     sha3Uncles: '0x0000000000000000000000000000000000000000000000000000000000000000',
//     size: 465n,
//     stateRoot: '0x',
//     timestamp: 1702445994n,
//     totalDifficulty: 0n,
//     transactionsRoot: '0xe7065a88de66c43f16ca1c20fa95e0d279567e7185de8cb08cc32a6bc6fa35b7'
//   }
// }
// {
//   db: {
//     OrmpDefaultConfigUpdated: {
//       findUnique: [AsyncFunction: findUnique],
//       findMany: [AsyncFunction: findMany],
//       create: [AsyncFunction: create],
//       createMany: [AsyncFunction: createMany],
//       update: [AsyncFunction: update],
//       updateMany: [AsyncFunction: updateMany],
//       upsert: [AsyncFunction: upsert],
//       delete: [AsyncFunction: delete]
//     }
//   },
//   network: { name: 'tron_shasta', chainId: 2494104990 },
//   client: {
//     account: undefined,
//     batch: undefined,
//     cacheTime: 4000,
//     chain: {
//       id: 2494104990,
//       network: 'homestead',
//       name: 'tron_shasta',
//       nativeCurrency: [Object],
//       rpcUrls: [Object],
//       blockExplorers: [Object],
//       contracts: [Object],
//       fees: undefined,
//       formatters: undefined,
//       serializers: undefined
//     },
//     key: 'base',
//     name: 'Base Client',
//     pollingInterval: 4000,
//     request: [AsyncFunction (anonymous)],
//     transport: {
//       key: 'custom',
//       name: 'Custom Provider',
//       request: [Function: bound request] AsyncFunction,
//       retryCount: 3,
//       retryDelay: 150,
//       timeout: undefined,
//       type: 'custom'
//     },
//     type: 'base',
//     uid: '2edd9fda080',
//     extend: [Function (anonymous)],
//     getBalance: [Function: getBalance],
//     getBytecode: [Function: getBytecode],
//     getStorageAt: [Function: getStorageAt],
//     multicall: [Function: multicall],
//     readContract: [Function: readContract]
//   },
//   contracts: {
//     ORMP: {
//       abi: [Array],
//       address: '0xf19177bE21F1393d255d483C924ea7f6DDbc7032',
//       startBlock: 39683259,
//       endBlock: undefined,
//       maxBlockRange: undefined
//     }
//   }
// }

ponder.on("ORMP:DefaultConfigUpdated", async ({ event, context }) => {
  const { OrmpDefaultConfigUpdated } = context.db;

  const { oracle, relayer } = event.args;

  await OrmpDefaultConfigUpdated.create({
    id: event.log.id,
    data: {
      oracle: oracle,
      relayer: relayer,
    }
  });
});
