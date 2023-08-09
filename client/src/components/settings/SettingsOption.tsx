import React from 'react';
import { SettingOptionType } from './Settings.type';


export const SettingOption: React.FC<SettingOptionType> = (
    { title: titleProps, onClick = undefined, text = "", buttonText = "" }
) => {
    return (
        <div className="setting--container">
            <div className="setting--title">{titleProps}</div>
            <div className="setting--text">{text}</div>
            <button onClick={onClick} className="setting--action-button" >{buttonText}</button>
        </div>
    );
}

// * (RenderSettingsOptions comp below)




















interface RenderSettingsOptionsProps {
    options: SettingOptionType[]
}

export const RenderSettingsOptions: React.FC<RenderSettingsOptionsProps> = ({ options }) => (
    options.map(op => <SettingOption {...op} />)
);
