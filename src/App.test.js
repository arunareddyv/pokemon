import { MemoryRouter } from "react-router"
import React, { Fragment } from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App.js', () => { 
  test('should have Pokemon details as root page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Details page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
