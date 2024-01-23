import { createConfig } from "@ponder/core";
import { http } from "viem";

import { ORMPAbi } from "./abis/ORMPAbi";
import { OracleV2Abi } from "./abis/OracleV2Abi";
import { RelayerAbi } from "./abis/RelayerAbi";

export default createConfig({
  networks: {
    // https://crab.subscan.io/
    crab: { chainId: 44, transport: http(process.env.PONDER_RPC_URL_CRAB) },
    // https://sepolia.arbiscan.io/
    arbitrum_sepolia: { chainId: 421_614, transport: http(process.env.PONDER_RPC_URL_ARBITRUM_SEPOLIA) },
    // https://sepolia.etherscan.io/
    sepolia: { chainId: 11_155_111, transport: http(process.env.PONDER_RPC_URL_SEPOLIA) },
    // https://shasta.tronscan.org/
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
          // TXzW7Zo6CNAS2c6VKJx1xpfeGxcshQGHMm
          address: "0xf19177be21f1393d255d483c924ea7f6ddbc7032",
          startBlock: 39683259,
        },
      }
    },
    OracleV2: {
      abi: OracleV2Abi,
      network: {
        crab: {
          address: "0x0000000005Be70A35b6534bFBd21eC0c98B27b1f",
          startBlock: 2150755,
        },
        arbitrum_sepolia: {
          address: "0x0000000005Be70A35b6534bFBd21eC0c98B27b1f",
          startBlock: 8999142,
        },
        sepolia: {
          address: "0x0000000005Be70A35b6534bFBd21eC0c98B27b1f",
          startBlock: 5136992,
        },
        tron_shasta: {
          // TDACQR5FUtNpuBS2g85WKiucvrAWhY6zzs
          address: "0x22fc744f3c0862d1d1f62a22da856886ca277da1",
          startBlock: 40292754,
        },
      }
    },
    Relayer: {
      abi: RelayerAbi,
      network: {
        crab: {
          address: "0x0000000000808fE9bDCc1d180EfbF5C53552a6b1",
          startBlock: 1658340,
        },
        arbitrum_sepolia: {
          address: "0x0000000000808fE9bDCc1d180EfbF5C53552a6b1",
          startBlock: 860637,
        },
        sepolia: {
          address: "0x0000000000808fE9bDCc1d180EfbF5C53552a6b1",
          startBlock: 4728915,
        },
        tron_shasta: {
          // TXoHifzQNtyfhGckxK4ZHp9w7yim8iZXZ8
          address: "0xef728bab47be9fd808d028d952a3e90d7d9974af",
          startBlock: 39683783,
        },
      }
    },

  },
});
