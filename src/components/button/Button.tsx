import React from "react";
import './Button.css';
import classNames from "classnames";


const Button: React.FC<buttonProps> = ({
    children,
    onClick,
    className,
    disabled,
    active
}) => {

    const classes: string = classNames(
        className,
        { active },
    )



    return(
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >{children}
        </button>
    )
}

type buttonProps = {
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className: string,
    disabled: boolean,
    active: boolean,
}

export default Button;