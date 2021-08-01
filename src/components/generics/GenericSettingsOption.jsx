import React from 'react';


export const SettingOption = ({ title: titleProps, onClick = undefined, text = "", buttonText = "" }) => {
    return (
        <div className="setting-container">
            <div className="setting-title">{titleProps}</div>
            <div className="setting-text">{text}</div>
            <button onClick={onClick} className="setting-button" >{buttonText}</button>
        </div>
    );
}

// (RenderSettingsOptions comp below)





















export const RenderSettingsOptions = ({ options }) =>
    options.map(op => <SettingOption
        key={op.buttonText}
        title={op.title}
        onClick={op.onClick}
        buttonText={op.buttonText}
        text={op.text}
        htmlFor={op.htmlFor}
    />)