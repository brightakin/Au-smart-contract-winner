// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface WinnerContract {
     function attempt() external ;
}

contract Event {
  
  function emitEvent (address _caller) public  {
    WinnerContract(_caller).attempt();
  }
}
