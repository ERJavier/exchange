// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract WalletContract {

    uint256 private constant MIN = 10000000000000000; //0.01
    address private constant HOT_WALLET = 0xdC479185BbDda8b8cf4C0F10630eAec2b0f9425F;

    event DepositOnMetaDapp();

    function forward() private {
        if (msg.value >= MIN) {
            (bool success, ) = payable(HOT_WALLET).call{value: address(this).balance}("");
            require(success);
            emit DepositOnMetaDapp();
        }
    }

    receive() external payable { forward(); }
    fallback() external payable { forward(); }
}