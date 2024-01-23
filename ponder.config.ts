import { createConfig } from "@ponder/core";
import { http } from "viem";

import { ORMPAbi } from "./abis/ORMPAbi";

export default createConfig({
  networks: {
    tron_shasta: { chainId: 2_494_104_990, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    ORMP: {
      abi: ORMPAbi,
      address: "0xf19177be21f1393d255d483c924ea7f6ddbc7032",
      // address: "0x00000000001523057a05d6293C1e5171eE33eE0A",
      network: "tron_shasta",
      // startBlock: 18753079,
      startBlock: 39683259,
    },
  },
});
