import React from 'react';

const Button = (props) => {
    const { children, ...propsInput } = props;
    return <button {...propsInput}>{children}</button>;
};

export default Button;