import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders beautiful content',  () => {
    render(<App />);
    expect(screen.queryByText('Tic Tac Toe')).toBeInTheDocument();
  });


//TODO move these to game.test.js 

it('renders 9 empty cells on start',  () => {
const { container } = render(<App />);
expect(container.getElementsByClassName('square').length).toBe(9);
});


it('renders 2 buttons',  () => {
const { container } = render(<App />);
expect(container.getElementsByClassName('controls').length).toBe(2);
});

it('X should go first ',  () => {
const { container } = render(<App />);
expect(container.querySelector('.title').textContent).toBe('Next Turn: X');
});


it('should let you place x or o and then reset ',  async () => {
    const initialGameStateMock = ['x', 'o', 'x', 
    'o', 'x', 'o', 
   'o', 'x', null ]

    const { container } = render(<App initialGameState={initialGameStateMock}/>);

    //8 played things
    expect(container.querySelectorAll('.bazinga').length).toBe(8);

    //4 Xes 
    //expect(container.querySelectorAll('.bazinga').filter(el => el.textContent === 'X')).toBe(4);
    const items = await screen.findAllByText('x')
    expect(items).toHaveLength(4)

    fireEvent.click(screen.getByText('Start Game'))

    expect(container.querySelectorAll('.bazinga').length).toBe(0);
});
    
    