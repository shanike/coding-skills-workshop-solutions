import axios from 'axios';
import { FC, useState } from 'react';

import { useTextByCount } from '../../common/hooks/use-text-by-count';


export const Guests: FC = () => {
    const [guestsCount, setGuestsCount] = useState<number | null>(null);
    const textByCount = useTextByCount({ none: "No one is here yet...", single: "We have 1 guest!", multi: guestsCount => `We have ${guestsCount} guests!` });

    const handleNewGuest = () => {
        const partyInfo = axios.post("/api/new-guest");
        setGuestsCount(curr => !curr ? 1 : curr + 1);
    }

    const DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS: { text: string, className: string }[] = [
        { text: "We can divide into pairs!!!", className: "color-green" },
        { text: "We can't divide into pairs...", className: "color-red" },
    ];

    const canDivideIntoPairs = guestsCount !== null && guestsCount % 2 === 0;

    const divideIntoPairsDisplay = DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS[canDivideIntoPairs ? 0 : 1];
    const guestsText = textByCount(guestsCount || 0);

    return (
        <div>
            <h1> Guests </h1>
            <p>{guestsText}</p>
            <p className={divideIntoPairsDisplay.className}>{divideIntoPairsDisplay.text}</p>
            <button onClick={handleNewGuest}>knock knock</button>
        </div>
    );
};
