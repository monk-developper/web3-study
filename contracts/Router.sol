// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;


import "./ERC20.sol";

contract Router {

  event buyRouter(address account , address _tokenAddr, uint256 _cost , uint256 _amount);
  event sellRouter(address account , address _tokenAddr, uint256 _cost , uint256 _amount);

  mapping (address => bool ) public supportsTokenAddr;

  modifier supportsToken(address _tokenAddr){
    require(supportsTokenAddr[_tokenAddr] == true , "This token is not supported" );
    _;
  }

  constructor (address[] memory _tokenAddr) {
    for(uint i=0 ; i < _tokenAddr.length; i++ ){
      supportsTokenAddr[_tokenAddr[i]] = true;
    }
  }


  function buyTokenRouter( address _tokenAddr, uint256 _cost , uint256 _amount) external payable supportsToken(_tokenAddr){
    ERC20 token = ERC20(_tokenAddr);
    require(msg.value == _cost , "Insufficient find");
    require(token.balanceOf(address(this)) >= _amount , "Token Sold Out");
    token.transfer(msg.sender, _amount);
    emit buyRouter(msg.sender,_tokenAddr, _cost, _amount);
  }

  function sellTokenRouter( address _tokenAddr, uint256 _cost , uint256 _amount) external payable supportsToken(_tokenAddr){
    ERC20 token = ERC20(_tokenAddr);
    require(token.balanceOf(msg.sender) >= _cost , "Insufficient token balance");
    require(address(this).balance >= _amount , "Dex does not have enough funds");
    token.transferFrom(msg.sender , address(this), _cost);
    (bool success , ) = payable(msg.sender).call{value: _amount}("");
    emit buyRouter( msg.sender, _tokenAddr, _cost, _amount);
  }

}