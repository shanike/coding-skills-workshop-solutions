import { useState } from 'react';
import { useImmer } from 'use-immer';
import { AvengersInfo } from './avangers.const';
import { Avenger, AvengerPicked } from './avengers.type';


const MESSAGES = {
    WRONG: "wrong, try again!",
    SUCCESS: "very good, you got all of them!",
}

export const Avengers = () => {
    const [message, setMessage] = useState("");
    const [selectedAvengersObj, setSelectedAvengersObj] = useImmer<AvengerPicked>({});

    const onClick = (name: Avenger["name"]) => {
        setSelectedAvengersObj(draftPrev => {
            draftPrev[name] = !draftPrev[name];
        });
    }

    const afterTheSnap = () => {
        const success = AvengersInfo.every(avenger => {
            const guessedWouldDie = selectedAvengersObj[avenger.name] || false;
            return guessedWouldDie === avenger.died
        })
        if (success) {
            setMessage(MESSAGES.SUCCESS)
            return
        }
        setMessage(MESSAGES.WRONG)
    }

    return (
        <div className="avengers--container">
            <h1>The Avengers</h1>
            <h2>Pick the characters that dies at the snap!</h2>
            <button onClick={afterTheSnap}>Check your answers!</button>
            <div className="avengers--message">{message}</div>
            <div className="avengers--list">
                {AvengersInfo.map((av) => {
                    const isChecked = selectedAvengersObj[av.name] || false;
                    return (
                        <div key={av.name} style={{ display: 'flex', direction: 'ltr' }}> {/* ! remove inline css */}
                            <input type="checkbox" checked={isChecked} onChange={() => onClick(av.name)} />
                            <label>{av.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
