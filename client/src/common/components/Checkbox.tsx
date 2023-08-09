import React from 'react';

interface CheckboxProps {
    isChecked: boolean,
    label?: string,
    onClick?: Function
    withMargin?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onClick, withMargin }) => {
    return (
        <div>
            <input style={{ marginRight: (withMargin ? '1vw' : '0') }} type="checkbox" checked={isChecked} onChange={() => onClick && onClick()} />
            <label>{label}</label>
        </div>
    );
};
