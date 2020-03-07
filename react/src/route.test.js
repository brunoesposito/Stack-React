import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './app';

test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
        <Router history={history}>
            <App />
        </Router>
    );
    expect(container.innerHTML).toMatch('Login')

    fireEvent.click(getByText('Register'))
    expect(container.innerHTML).toMatch('Register')

    fireEvent.click(getByText('Cancel'))
    expect(container.innerHTML).toMatch('Login')
});