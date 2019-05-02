pragma solidity >=0.4.21 <0.6.0;

contract SimpleStorage {
    event StorageSet(string _message);

    uint public storedData;
    bool public storedBool;

    function set(uint x) public {
        storedData = x;

        emit StorageSet("Data stored successfully!");
    }

    function setBool(bool x) public {
        storedBool = x;

        emit StorageSet("Boolean stored successfully!");
    }
}
