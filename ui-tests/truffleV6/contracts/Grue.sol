pragma solidity >=0.5.15 <0.7.0;

contract Grue {
    uint256 public publicState; // public uint256
    uint256 internal internalState; // internal uint256
    uint256 private privateState; // uint256 private
	bool public boolean; // public bool
	mapping (address => uint) public balances; // public mapping
	uint256[] public dynamicArray; // public dyanamic array
	uint256[10] public fixedArray; // public fixed array
	address public owner; // public addresss
	string public str; // public string
	enum ActionChoices {Up, Right, Down, Left} // enum
	ActionChoices public choice; // public enum
	struct Num {
		uint amount;
	}
	mapping(address => Num) public nums;

	constructor() public { // 0.5.0+
	// function Grue() public { // 0.4.25 and below
		publicState = 42;
		internalState = 42;
        privateState = 42;
		boolean = true;
		balances[msg.sender] = 42;
		dynamicArray.push(42);
		fixedArray[0] = 42;
		owner = msg.sender;
		str = '42';
		choice = ActionChoices.Left;
		nums[msg.sender] = Num(42);
	}

	/*
	* Pure functions
	* pure func
	* pure function without pure tag
	*/

	// pure function
	function pureFunc() public pure returns(uint) {
		return 1 + 1;
	}

	// TODO: discuss and address what to do with cases where dev leaves out pure tag
	// function pureFuncWithoutPureTag() public returns(uint) {
	// 	return 1 + 1;
	// }

	/*
	* publicState functions
	* getter - built in
	* setter nonpayable
	* setter payable
	*/

	// setter for publicState payable
	function setpublicStatePayable(uint256 num) public payable {
		publicState = num;
	}

	// setter for publicState nonpayable
	function setpublicStateNonPayable(uint256 num) public {
		publicState = num;
	}


	/*
	* internal state functions
	* getter view
	* getter without view tag
	* setter nonpayable
	* setter payable
	*/


	// getter for the privateState
    function getInternalState() public view returns (uint) {
        return internalState;
    }

	// TODO: disccus what happens when dev leaves out view tag
	// without view tag
	// function getInternalStateWithoutViewTag() public returns (uint) {
    //     return internalState;
    // }

	// setter for internalState payable
	function setInternalStatePayable(uint256 num) public payable {
		internalState = num;
	}

	// setter for internalState nonpayable
	function setInternalStateNonPayable(uint256 num) public {
		internalState = num;
	}


	/*
	* private state functions
	* getter view
	* setter nonpayble
	* setter payable
	*/


	// getter for the privateState
    function getPrivateState() public view returns (uint) {
        return privateState;
    }

	// payable setter for private state var
    function setPrivateStatePayable( uint num) public payable {
        privateState = num;
    }

	// nonpayable setter for private state var
	function setPrivateStateNonPayable( uint num) public {
        privateState = num;
    }

	/*
	* boolean functions
	* setter payable
	* setter nonpayable
	*/

	function setBooleanPayable() public payable returns (bool) {
		boolean = !boolean;
		return boolean;
	}

	function setBooleanNonPayable() public returns (bool) {
		boolean = !boolean;
		return boolean;
	}

	/*
	* Map type functions
	* getter is built in
	* setter payable
	* setter nonpayable
	*/

	// payable setter
	function setBalancesMapPayable(uint amount) public payable returns(bool success) {
		balances[msg.sender] += amount;
		return true;
	}

	// nonpayable setter
	function setBalancesMapNonPayable(uint amount) public returns(bool success) {
		balances[msg.sender] += amount;
		return true;
	}

	/*
	* dynamic array
	* getter for returning entire array
	* setter payable
	* setter nonpayable
	*/
    function getDynamicArray() public view returns(uint[] memory){
        return dynamicArray;
    }
    
	function setDynamicArrayPayable(uint amount) public payable returns(bool success){
		dynamicArray.push(amount);
		return true;
	}

	function setDynamicArrayNonPayable(uint amount) public returns(bool success){
		dynamicArray.push(amount);
		return true;
	}

	/*
	* fixed array
	* getter for returning entire array
	* setter payable
	* setter nonpayable
	*/
	
	function getFixedArray() public view returns(uint[10] memory){
        return fixedArray;
    }

	function setFixedArrayPayable(uint index, uint amount) public payable returns(bool success){
		fixedArray[index] = amount;
		return true;
	}

	function setFixedArrayNonPayable(uint index, uint amount) public returns(bool success){
		fixedArray[index] = amount;
		return true;
	}

	/*
	* owner functions
	* getter built in
	* setter payable
	* setter nonpayable
	*/

	function setOwnerPayable(address addr) public payable returns (bool success) {
		owner = addr;
		return true;
	}

	function setOwnerNonPayable(address addr) public returns (bool success) {
		owner = addr;
		return true;
	}

	/*
	* str functions
	* getter built in
	* setter payable
	* setter nonpayable
	*/

	function setStrPayable(string memory newStr) public payable returns (bool success) {
		str = newStr;
		return true;
	}

	function setStrNonPayable(string memory newStr) public returns (bool success) {
		str = newStr;
		return true;
	}

	/*
	* enum functions
	* getter built in
	* setter payable
	* setter nonpayable
	*/

	function setEnumPayable () public payable returns (bool success) {
		choice = ActionChoices.Down;
		return true;
	}

	function setEnumNonPayable () public returns (bool success) {
		choice = ActionChoices.Up;
		return true;
	}

	/*
	* struct mapping functions
	* getter built in
	* setter payable
	* setter nonpayable
	*/

	function setNumsStructPayable(uint num) public payable returns (bool success) {
		nums[msg.sender] = Num(num);
		return true;
	}

	function setNumsStructNonPayable(uint num) public returns (bool success) {
		nums[msg.sender] = Num(num);
		return true;
	}






}
