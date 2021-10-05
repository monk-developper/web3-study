// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;

import "./ERC20.sol";

contract TokenA is ERC20 {
    constructor (string memory _name , string memory _symbol , uint256 _totalSupply)
    ERC20(_name , _symbol , _totalSupply){

    }
}