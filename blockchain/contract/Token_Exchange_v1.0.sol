// v1.0

// Problem
// ICT 토큰과 USDC 토큰을 둘 다 임포트 해오면 에러가 발생함
// DeclarationError: Identifier already declared.

// Solution
// 필요한 컨트랙트들만 import 해온다.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./USDC_Token_flattened_v1.0.sol";

contract Incheon_Coffeebak_Token is
    ERC20,
    Ownable,
    ERC20Burnable,
    ERC20Pausable,
    ERC20Permit
{
    //
    // 지급 받은 총 토큰에 대한 양
    mapping(address account => uint256) public my_total_ICT;

    // 여기서 msg.sender는 배포자
    // 즉 배포자가 ICT 컨트랙의 소유자가 된다.
    constructor()
        ERC20("Incheon_Coffeebak_Token", "ICT")
        Ownable(_msgSender())
        ERC20Permit("Incheon_Coffeebak_Token")
    {
        // 여기서 msg.sender는 배포자
        // 여기서 address(this)는 ICT의 CA
        // 배포 시 민팅되는 토큰은 CA에게 발행해준다.
        // 그리고 CA의 토큰 잔액 전량에 대해 접근 권한을 배포자에게 부여한다.
        _mint(address(this), 1000000000 * 10 ** decimals());
        _approve(address(this), _msgSender(), totalSupply());
    }

    // pause(), unpause(), mint() 함수는 별도로 정의하고, 함수 스코프 안에서 상속 받은 함수를 호출한다.
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // 여기서 address(this)는 ICT의 CA
    // 여기서 msg.sender는 ICT 컨트랙트의 오너
    // 추가 민팅 역시 CA에게 전송되며, 추가 발행량 만큼 오너의 접근 권한도 증가시켜준다.
    function mint(uint256 _amount) public onlyOwner {
        //
        _mint(address(this), _amount);
        uint256 old_amount = allowance(address(this), _msgSender());
        _approve(address(this), _msgSender(), old_amount + _amount);

        // // 아니면 현재 CA 잔액만큼 접근 권한을 설정해줘도 될 듯하다.
        // _approve(address(this), msg.sender, balanceOf(address(this)));
    }

    // 여기서 address(this)는 ICT의 CA
    // 여기서 msg.sender는 ICT 컨트랙트의 오너
    // 만약 오너를 없애고자 할 경우 CA의 토큰에 대한 접근 권한도 0으로 초기화시켜준다.
    // CA의 토큰에 접근하고자 한다면 _approve() 함수는 internal이라서 외부에서 호출할 수 없고
    // approve() 함수는 owner = msg.sender이기 때문에 CA가 msg.sender가 되어야 하는데
    // CA가 msg.sender가 될 수 있는 경우의 수는 CA의 컨트랙 내부에서 다른 컨트랙의 함수를 호출해야 하는데
    // 이미 배포된 코드는 변경될 수 없으므로 더 이상 CA의 토큰은 사용될 수 없다.
    function renounceOwnership() public override onlyOwner {
        //
        super.renounceOwnership();
        _approve(address(this), _msgSender(), 0);
    }

    // 여기서 address(this)는 ICT의 CA
    // 여기서 msg.sender는 ICT 컨트랙트의 오너
    // 만약 오너를 바꾸고자 한다면 CA 토큰 접근 권한에 대해 기존 오너는 0으로 초기화시키고
    // 새 오너는 현재 CA 토큰 잔액만큼 부여해준다.
    function transferOwnership(address _new_owner) public override onlyOwner {
        //
        super.transferOwnership(_new_owner);
        _approve(address(this), _msgSender(), 0);
        _approve(address(this), _new_owner, balanceOf(address(this)));
    }

    // The following functions are overrides required by Solidity.

    // 결국 업데이트 함수가 토큰이 이동하는 최종 함수로서
    // 상속 받아서 재정의하는 것이 요구되어 있다.
    // 이 _update() 함수는 ERC20, ERC20Pausable 컨트랙에 정의되어 있고
    // 상속 순서에 따라 ERC20Pausable 컨트랙의 _update() 함수가 호출된다.
    // 따라서 상속해주는 컨트랙들 간에 동일한 함수가 있을 경우 반드시 재정의가 요구되는 것 같다.
    function _update(
        address _from,
        address _to,
        uint256 _value
    ) internal override(ERC20, ERC20Pausable) {
        //
        super._update(_from, _to, _value);
        my_total_ICT[_to] += _value;
    }

    // receive(), fallback() 함수는 구현하지 않음
}

contract Token_Exchange is Ownable {
    //
    Incheon_Coffeebak_Token private _ICT_token;
    USDC_Token private _USDC_token;

    // 1원의 가치인 1 ICT를 1달러 즉 1000원인 USDC로 환산하기 위한 단위
    // 현재로서는 1 ICT가 0.001 USDC 되므로 token_exchange_unit 값은 1000
    uint256 public token_exchange_unit;

    // 여기서 msg.sender는 배포자
    constructor(
        Incheon_Coffeebak_Token _ICT_CA,
        uint256 _token_exchange_unit,
        USDC_Token _USDC_CA
    ) Ownable(_msgSender()) {
        //
        _ICT_token = _ICT_CA;
        _USDC_token = _USDC_CA;
        token_exchange_unit = _token_exchange_unit;
    }

    function set_token_exchange_unit(
        uint256 _new_token_exchange_unit
    ) public onlyOwner {
        //
        token_exchange_unit = _new_token_exchange_unit;
    }

    // 여기서 address(this)는 토큰 환전 컨트랙트의 CA
    // ICT 토큰을 USDC로 환전해주기 위해서는
    // 첫째, 유저의 ICT 토큰을 다시 CA로 반환받아야 한다.
    // 둘째, CA에서 유저에게 USDC를 지급해줘야 한다.
    // 첫번째에서 유저는 가스비인 이더가 없을 수 있다.
    // 그렇기 때문에 permit으로 가스비를 대납하여 approve 하고 transferfrom 해야 한다.
    // 여기서 msg.sender 및 spender는 유저의 개인키를 알고 있는 플랫폼 관리자, owner 및 from은 유저, to는 CA이다.
    // 두번째에서 CA에 대한 접근 권한이 있는 USDC 컨트랙트의 오너 즉 플랫폼 관리자가 transferfrom으로 from CA로부터 to 유저에게 USDC를 지급해준다.
    function exchange_token(
        address _owner,
        address _spender,
        uint256 _value,
        uint256 _deadline,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) public returns (bool) {
        //
        _ICT_token.permit(_owner, _spender, _value, _deadline, _v, _r, _s);
        _ICT_token.transferFrom(_owner, address(this), _value);

        // 30원을 달러 단위 0.03으로 변환하기 위한 계산 작업
        uint256 exchanged_amount = _value / token_exchange_unit;
        _USDC_token.transferFrom(address(this), _owner, exchanged_amount);
        return true;
    }
}
