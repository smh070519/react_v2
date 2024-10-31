import React from 'react';

const Amount = ({
    divStyle,
    buttonStyle,
    pStyle,
    props,
    onClickToAddAmount,
    onClickToSubtractAmount,
    onClickToAddCoupon,
    onClickToSubtractCoupon
}) => {
    console.log("자식컴포넌트")


    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
            <p style={pStyle}>수량:{props.amount}</p>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
            <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
            <p style={pStyle}> 쿠폰:{props.coupon}</p>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
        </div>
    );
};

export default Amount;