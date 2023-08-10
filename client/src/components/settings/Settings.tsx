import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SettingOption } from './SettingsOption';

import { SettingOptionType } from './Settings.type';
import { DefaultUserTypeName, NameByUserType, UserTypes } from './user-type.const';

import './Settings.scss';


export const Settings: FC = () => {

    const searchParams = useSearchParams()[0];
    const isAdmin = searchParams.get("isAdmin") === "t";
    // const isAdmin = useIsAdmin()

    const [userTypeName, setUserNameType] = useState("");

    const handleLogout = () => console.log(`history.push(window.location.pathname)`)

    const handleClick = () => {
        console.log("new category")
    }

    const handleUpdateUserType = () => {
        const newUser = UserTypes[Math.floor(Math.random() * UserTypes.length)];
        const newUserTypeName = NameByUserType[newUser] || DefaultUserTypeName;
        setUserNameType(newUserTypeName);
    }

    const handleResetPWClick = () => {
        console.log(`history.push('reset-password?b=h')`)
    }

    const options: SettingOptionType[] = [
        {
            title: "שינוי סיסמא",
            buttonText: "שנה סיסמא",
            onClick: handleResetPWClick,
            text: "",
        },
        {
            title: "הוספת קטגוריה",
            buttonText: "הוסף קטגוריה",
            onClick: handleClick,
            text: "הוספת קטגוריה שתופיע לכל המורים הרשומים לארגון שלך",
        }
    ]

    if (isAdmin) {
        options.push({
            title: "סוג המשתמש שאני",
            buttonText: "שינוי",
            onClick: handleUpdateUserType,
            text: userTypeName || "no user type yet",
        })
    }
    // const options = useSettingsOptions();

    return (
        <div className="admin-settings--container">
            <div className="admin-settings--title">הגדרות</div>

            <div className="admin-settings--white-box">
                <div className="settings-content--container">

                    {options.map(op => <SettingOption
                        key={op.buttonText}
                        title={op.title}
                        onClick={op.onClick}
                        buttonText={op.buttonText}
                        text={op.text}
                    />)}

                    <div className="settings-buttons--container">
                        <button onClick={handleLogout} className="button">התנתק</button>
                    </div>

                </div>
            </div>
        </div >
    );
}