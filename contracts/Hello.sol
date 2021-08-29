// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Hello {
  string public message = "HelloWorld";

  function update(string memory newMessage) public {
    message = newMessage;
  }
}