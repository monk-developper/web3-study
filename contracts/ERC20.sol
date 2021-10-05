// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;

contract ERC20 {

    string public name;                   //fancy name: eg Simon Bucks
    string public symbol;                 //An identifier: eg SBX
    uint8 public decimals = 18;                //How many decimals to show.
    uint256 public totalSupply;


    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowances;

    event Transfer (address indexed _from , address indexed _to , uint256 _value);
    event Approval (address indexed _owner , address indexed _spender , uint256 _value);

    /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */

    constructor(string memory _name , string memory _symbol , uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply; 
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value) external returns (bool success) {
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success) {
        require(allowances[_from][msg.sender] >= _value , "Transfer amount exceeds allownace");
        _transfer(_from, _to, _value);
        allowances[_from][msg.sender] -= _value;
        return true;
    }

    function _transfer (address _from , address _to , uint256 _value) private {
        require(balances[msg.sender] >= _value, "Insufficient balance");
        require(_from != _to , "from = to");
        balances[_from] -= _value;
        balances[_to] += _value;
        emit Transfer(_from, _to, _value); //solhint-disable-line indent, no-unused-vars
        
        
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowances[_owner][_spender];
    }


}