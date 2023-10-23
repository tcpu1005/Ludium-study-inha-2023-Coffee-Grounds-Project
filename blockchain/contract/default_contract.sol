// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract default_contract {
    //
    string messgage;

    constructor() {
        messgage = "Hello World!";
    }

    function get_message() public view returns (string memory) {
        return messgage;
    }

    function set_message(string memory new_message) public {
        messgage = new_message;
    }
}
