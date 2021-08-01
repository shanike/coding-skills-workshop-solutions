import React, { useEffect, useState } from 'react';

let interval = null

const Square = () => {

    const [currentSquare, setCurrentSquare] = useState(0)
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(16)

    useEffect(() => {
        interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(interval)
                    return 0
                }
                return prevSeconds - 1
            })
        }, 1000)
    }, [])

    return (
        <>
            <div>{count === 0
                ? 'לחצו על הריבוע האדום'
                : 'לחצת '
                + (count === 1 ? ' פעם אחת'
                    : count === 2 ? ' פעמיים'
                        : (count + ' פעמים'))}

            </div>

            <div id='containSquares' >
                <div className={'square ' + (currentSquare === 0 ? 'chosenSquare' : '')} onClick={() => {
                    if (currentSquare === 0) {
                        if (seconds !== 0) {
                            setCurrentSquare(Math.floor(Math.random() * 4))
                            setCount(prevCount => prevCount + 1)
                        }
                    }
                }}></div>
                <div className={'square ' + (currentSquare === 1 ? 'chosenSquare' : '')} onClick={() => {
                    if (currentSquare === 1) {
                        if (seconds !== 0) {
                            setCurrentSquare(Math.floor(Math.random() * 4))
                            setCount(prevCount => prevCount + 1)
                        }
                    }
                }}></div>
                <div className={'square ' + (currentSquare === 2 ? 'chosenSquare' : '')} onClick={() => {
                    if (currentSquare === 2) {
                        if (seconds !== 0) {
                            setCurrentSquare(Math.floor(Math.random() * 4))
                            setCount(prevCount => prevCount + 1)
                        }
                    }
                }}></div>
                <div className={'square ' + (currentSquare === 3 ? 'chosenSquare' : '')} onClick={() => {
                    if (currentSquare === 3) {
                        if (seconds !== 0) {
                            setCurrentSquare(Math.floor(Math.random() * 4))
                            setCount(prevCount => prevCount + 1)
                        }
                    }
                }}></div>
            </div>

            <div> נשארו עוד {seconds} שניות </div>
        </>
    )
}

export default Square;