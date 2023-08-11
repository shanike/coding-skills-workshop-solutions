import axios from "axios";
import { FC, useState } from "react";

export const Guests: FC = () => {
    const [guestsCount, setGuestsCount] = useState<number | null>(null);

    const handleNewGuest = () => {
        const partyInfo = axios.post("/api/new-guest");
        setGuestsCount(curr => !curr ? 1 : curr + 1);
    }

    const DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS: { text: string, className: string }[] = [
        { text: "We can divide into pairs!!!", className: "color-green" },
        { text: "We can't divide into pairs...", className: "color-red" },
    ];

    const canDivideIntoPairs = guestsCount !== null && guestsCount % 2 === 0;

    const divideIntoPairsProperties = DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS[canDivideIntoPairs ? 0 : 1];
    
    // move outside component to guests1.function.ts
    const generateGuestsText = () => {
        if (!guestsCount) {
            return "No one is here yet..."
        }
        if (guestsCount === 1) {
            return "We have 1 guest!";
        }
        return `We have ${guestsCount} guests!`
    }
    const guestsText = generateGuestsText();

    return (
        <div>
            <h1> Guests </h1>
            <p>{guestsText}</p>
            <p className={divideIntoPairsProperties.className}>{divideIntoPairsProperties.text}</p>
            <button onClick={handleNewGuest}>knock knock</button>
        </div>
    );
};
