pragma solidity >=0.5.0 <0.6.0;

contract TestContract {
    uint public storedData  = 0;
    event LogStoredData(uint data);

    function setData(uint _value) public {
        storedData = _value;
        emit LogStoredData(_value);
    }
}

