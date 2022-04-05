import { useState } from "react"

export default function Footer({showStreak, streak, wins, total}) {

console.log(streak);
    const getColor = () => {
        if(showStreak === 'loser'){
            return 'rgb(251 0 0 / 85%)';
        } else if(showStreak === 'crazy') {
            return 'rgb(0 169 0 / 85%)';
        } else if( showStreak === 'hp' ){
            return 'rgb(0 136 255 / 85%)';
        } else if(( showStreak === 'lotr' )){ 
            return 'rgb(250, 112, 0, 0.843)';
        }
    }

    const getShadow = () => {
        if(showStreak === 'loser'){
            return '0 0 80px rgb(251 0 0 / 85%), 0 0 32px rgb(251 0 0 / 74%)';
        } else if(showStreak === 'crazy') {
            return '0 0 80px rgb(0 169 0 / 85%), 0 0 32px rgb(0 169 0 / 74%)';
        } else if( showStreak === 'hp'){
            return '0 0 80px rgb(0 136 255 / 85%), 0 0 32px rgb(0 136 255 / 74%)';
        } else if( showStreak === 'lotr'){
            return '0 0 80px rgb(250, 112, 0, 0.843), 0 0 32px rgb(250, 112, 0, 0.843)';
        }
    }

    return (
        <>
            <div style={{marginTop: '-22vh', color: 'white'}}>
                <h5>Select another quote!</h5>
                <h5 style={{ marginTop: '-4vh', color: getColor(), textShadow: getShadow() }}>Streak: {streak}</h5>
            </div>
        </>
    )
}
