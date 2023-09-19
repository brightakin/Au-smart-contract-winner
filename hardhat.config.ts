import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [process.env.TEST_PRIVATE_KEY],
    },
  },
};

export default config;
