// v1.0
// 오픈 재플린 위자드 사이트를 이용해서 작성한 토큰 컨트랙트
// https://wizard.openzeppelin.com/

// 리믹스 데몬 실행하는 법
// npm install -g @remix-project/remixd
// cd contract
// remixd -s . -u https://remix.ethereum.org

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// npm install @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Incheon_Coffeebak_Token is ERC20, Ownable, ERC20Burnable, ERC20Pausable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("Incheon_Coffeebak_Token", "ICT")
        Ownable(initialOwner)
        ERC20Permit("Incheon_Coffeebak_Token")
    {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}
