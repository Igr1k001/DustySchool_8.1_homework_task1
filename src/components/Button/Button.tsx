import React from 'react';

import './Button.css';

import { cnButton } from './Button.classname';


export interface IButtonProps {
    theme: 'dark' | 'light';
    type: 'primary' | 'secondary';
    hover?: boolean;
    disable?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ theme, type, hover, disable }) => {

    const classNames = cnButton({
        theme: theme === 'light' ? 'light' : 'dark',
        type: type === 'primary' ? 'primary' : 'secondary',
        hover: hover,
        disable: disable
    });

    return (
        <button className={classNames}>
            Hello
        </button>
    );
}