import React from 'react';

import './Button.css';

export interface IButtonProps {
    theme: 'dark' | 'light';
    type: 'primary' | 'secondary';
    hover?: Boolean;
    disable?: Boolean;
}

export const Button: React.FC<IButtonProps> = ({ theme, type, hover, disable }) => {
    const classNames = ['Button'];

    classNames.push(theme === 'light' ? 'Button_theme_light' : 'Button_theme_dark');
    classNames.push(type === 'primary' ? 'Button_type_primary' : 'Button_type_secondary');

    if (hover) {
        classNames.push('Button_hover_yes');
    }

    if (disable) {
        classNames.push('Button_disable_yes');
    }

    return (
        <button className={classNames.join(' ')}>
            Hello
        </button>
    );
}





// import React from 'react';

// import './Button.css';

// export interface IButtonProps extends React.PropsWithChildren {
//     theme?: 'dark' | 'light';
//     type?: 'primary' | 'secondary';
//     condition?: 'normal' | 'hover' | 'disable';
// }

// export const Button: React.FC<IButtonProps> = (props) => {
//     const { children, theme = 'light', type = 'primary', condition='normal' } = props;

//     return (
//         <button className={`
//             Button 
//             ${theme === 'light' ? 'Button_theme_light' : 'Button_theme_dark'} 
//             ${type === 'primary' ? 'Button_type_primary' : 'Button_type_secondary'}
//             ${condition === 'normal' ? 'Button_condition_normal' : 'Button_type_secondary'}
//         `}>
//             {children}
//         </button>
//     );
// }