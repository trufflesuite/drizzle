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

    /// @dev test view function that takes a parameter
    function getValueWithOffset(uint offset)
      public view
      returns (uint)
    {
        return storedData + offset;
    }

    /// @dev test view function that takes a parameter
    function getValueWithOffsetAndMultiplier(uint offset, uint multiplier)
      public view
      returns (uint)
    {
        return (storedData + offset) * multiplier;
    }
}
