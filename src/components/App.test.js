import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});




it('renders beautiful content',  () => {
    render(<App />);
    expect(screen.queryByText('Tic Tac Toe')).toBeInTheDocument();
  });


  it('renders 9 empty cells on start',  () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('square').length).toBe(9);
  });