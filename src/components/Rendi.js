import React, { useEffect, useState } from 'react';

export function Rendi() {
    const [counter, setCounter] = useState(0)
    const [effected, setEffected] = useState(1);
    useEffect(() => {
        setCounter(counter + 1);
    }, [effected])

    useEffect(() => {
        setInterval(() => {
            console.log("interval", effected)
            setEffected(effected + 1);
            // same to console.log of "new" state after a setState
        }, 1000);
    }, [])
    console.log("render. counter: ", counter)

    return <div>This component has been rendered too many times,{counter} affected {effected}</div>
}