import React from 'react';
import { resetFetch } from '../common/fakeFetches';

// import { Options } from "./generics/genericWay-במקרה-הכינותי-מראש";
// import { RenderSettingsOptions } from './generics/GenericSettingsOption'

import './Settings.scss';

export const Settings = ({ isAdmin }) => {

    const handleLogout = () => console.log(`history.push(window.location.pathname)`)

    const hanleLanguage = async () => {
        let msg = await resetFetch();
        console.log("msg: ", msg);
    }

    const handleClick = () => {
        console.log("new category")
    }

    const handleEditUser = () => {
        console.log("edit user info")
        console.log("d")
        console.log("o")
        console.log("n")
        console.log("e")
    }

    const handleResetPWClick = () => {
        console.log(`history.push('reset-password?b=h')`)
    }

    return (
        <div id="admin-settings-container">
            <div className="admin-settings-title">הגדרות</div>

            <div id="admin-settings-white-box" className="admin-table-container">
                <div id="settings-content-container">

                    {/* <RenderSettingsOptions options={Options} /> */}

                    <div className="setting-container">
                        <div onClick={() => { handleLogout() }} id="button">התנתק</div>
                    </div>

                </div>
            </div>
        </div >
    );
}