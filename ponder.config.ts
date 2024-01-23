import { createConfig } from "@ponder/core";
import { http } from "viem";

import { ORMPAbi } from "./abis/ORMPAbi";

export default createConfig({
  networks: {
    crab: { chainId: 44, transport: http(process.env.PONDER_RPC_URL_CRAB) },
    arbitrum_sepolia: { chainId: 421_614, transport: http(process.env.PONDER_RPC_URL_ARBITRUM_SEPOLIA) },
    sepolia: { chainId: 11_155_111, transport: http(process.env.PONDER_RPC_URL_SEPOLIA) },
    tron_shasta: { chainId: 2_494_104_990, transport: http(process.env.PONDER_RPC_URL_TRON_SHASTA) },
  },
  contracts: {
    ORMP: {
      abi: ORMPAbi,
      network: {
        crab: {
          address: "0x00000000001523057a05d6293C1e5171eE33eE0A",
          startBlock: 1658340,
        },
        arbitrum_sepolia: {
          address: "0x00000000001523057a05d6293C1e5171eE33eE0A",
          startBlock: 860637,
        },
        sepolia: {
          address: "0x00000000001523057a05d6293C1e5171eE33eE0A",
          startBlock: 4728915,
        },
        tron_shasta: {
          address: "0xf19177be21f1393d255d483c924ea7f6ddbc7032",
          startBlock: 39683259,
        },
      }
    },
  },
});
