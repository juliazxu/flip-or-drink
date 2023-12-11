"use client"

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {keyQuestions} from '@/app/keyQuestions';


function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function Card() {
    const [flip, setFlip] = useState(false);
    const [currInteger, changeInteger] = useState(getRandomInt(1, keyQuestions.length - 1));
    const [numPass, changeNumPass] = useState(0);

    let currentItem = keyQuestions[currInteger];
    let currentKey = Object.keys(currentItem)[0];
    let currentQuestion = Object.values(currentItem)[0];
    return (
        <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div className="gradient-1" style={{
                width: '90vw',
                // height: '50vh',
                fontSize: '40px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {currentKey}
                <br />
                <br />
                <button style={{
                    width: '120px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    marginRight: '10px'
                }} onClick={() => setFlip(!flip)}>
                    Flip</button>
                {
                    (numPass < 2) && (
                        <button style={{
                            width: '120px',
                            padding: '10px',
                            fontSize: '20px',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '5px'
                        }} onClick={() => {
                            changeInteger(getRandomInt(1, keyQuestions.length - 1));
                            changeNumPass(numPass +1);
                        }
                        }>
                            Pass</button>
                    )
                }
            </div>
            {flip && <div className="gradient-2" style={{
                width: '90vw',
                // height: '50vh',
                fontSize: '30px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px',
            }}>
                {currentQuestion}
                <br />
                    <button style={{
                    width: '120px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    marginTop: '20px',
                }} onClick={() => {
                    changeInteger(getRandomInt(1, keyQuestions.length - 1));
                    setFlip(!flip);
                    changeNumPass(0);
                }}>
                    Next</button>
            </div>}
        </ReactCardFlip>
    );
}
 
export default Card;