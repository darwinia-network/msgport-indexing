import { createConfig } from "@ponder/core";
import { http } from "viem";

import { ORMPAbi } from "./abis/ORMPAbi";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    ORMP: {
      abi: ORMPAbi,
      address: "0x00000000001523057a05d6293C1e5171eE33eE0A",
      network: "mainnet",
      startBlock: 18753079,
    },
  },
});
