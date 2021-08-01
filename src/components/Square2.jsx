import React, { useCallback, useEffect, useState, useMemo } from 'react';

const FOUR_SQUARES = [0, 1, 2, 3]
const GAME_TIME = 16


const Square = () => {

    const [currentSquare, setCurrentSquare] = useState(0)
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(GAME_TIME)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(interval)
                    return 0
                }
                return prevSeconds - 1
            })
        }, 1000);
        return () => { clearInterval(interval) }
    }, [])

    const handleClick = (item) => {
        if (currentSquare !== item || seconds === 0) return
        setCurrentSquare(Math.floor(Math.random() * 4))
        setCount(prevCount => prevCount + 1)
    }

    const printCount = useMemo(() => {
        switch (count) {
            case 0:
                return 'לחצו על הריבוע האדום'
            case 1:
                return 'לחצת פעם אחת'
            case 2:
                return 'לחצת פעמיים'
            default:
                return `לחצת ${count} פעמים`
        }
    }, [count])

    return (
        <>
            <div>{printCount}</div>
            <div id='containSquares' >
                {FOUR_SQUARES.map((sqr) => (
                    <div
                        key={sqr}
                        className={`square ${currentSquare === sqr ? 'chosenSquare' : ''}`}
                        onClick={() => handleClick(sqr)}
                    />))}
            </div>
            <div> נשארו עוד {seconds} שניות </div>
        </>
    )
}

export default Square;



/*

const printCount = useMemo(() => {
    switch (count) {
        case 0:
            return 'לחצו על הריבוע האדום'
        case 1:
            return 'לחצת פעם אחת'
        case 2:
            return 'לחצת פעמיים'
        default:
            return `לחצת ${count} פעמים`
    }
}, [count])

*/