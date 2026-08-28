// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KarmaJolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KarmaJolt/i);
    expect(titleElement).toBeInTheDocument();
});
