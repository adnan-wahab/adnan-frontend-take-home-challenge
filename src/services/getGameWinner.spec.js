// import React from 'react';
// import ReactDOM from 'react-dom';
import getGameWinner from './getGameWinner';
import '@testing-library/jest-dom';


it('returns null if you can keep playing', () => {
    const gameState = new Array(9).fill(null)
    expect(    getGameWinner({gameState})
).toBe(null);

});

it('returns true if someone wins', () => {
    const gameState = [true, true, true, null, null, null, null, null, null]
    getGameWinner({gameState})

});

it('catches ties', () => {
    const gameState = ['x', 'o', 'x', 
                       'o', 'x', 'o', 
                      'o', 'x', 'o' ]
    //new Array(9).fill(0).map(() => Math.random() > .5 )
    
    expect(getGameWinner({gameState})
    ).toBe('Tie');
});