import React from 'react';

const Stats = ({players}) => {
    
    let totalPlayers = players.length;
    let totalPoints = players.reduce((total, player) => {return total + player.score}, 0);
    
    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Spelare:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Poäng:</td>
                <td>{totalPoints}</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Stats;