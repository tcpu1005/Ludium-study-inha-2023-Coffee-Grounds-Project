// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract USDC_Token is
    ERC20,
    Ownable,
    ERC20Burnable,
    ERC20Pausable,
    ERC20Permit
{
    //
    constructor()
        ERC20("USDC_Token", "USDC")
        Ownable(_msgSender())
        ERC20Permit("USDC_Token")
    {
        _mint(address(this), 1000000000 * 10**decimals());
        _approve(address(this), _msgSender(), totalSupply());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(uint256 _amount) public onlyOwner {
        //
        _mint(address(this), _amount);
        uint256 old_amount = allowance(address(this), _msgSender());
        _approve(address(this), _msgSender(), old_amount + _amount);
    }

    function renounceOwnership() public override onlyOwner {
        //
        super.renounceOwnership();
        _approve(address(this), _msgSender(), 0);
    }

    function transferOwnership(address _new_owner) public override onlyOwner {
        //
        super.transferOwnership(_new_owner);
        _approve(address(this), _msgSender(), 0);
        _approve(address(this), _new_owner, balanceOf(address(this)));
    }

    function _update(
        address _from,
        address _to,
        uint256 _value
    ) internal override(ERC20, ERC20Pausable) {
        //
        super._update(_from, _to, _value);
    }
}
