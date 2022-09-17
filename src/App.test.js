import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button renders correct initial color', () => {
    render(<App />);

    //button exists, initial text
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    //initial color 
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    //click
    fireEvent.click(colorButton);

    //expect color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    //button text --> 'Change to red'
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
    render(<App />);

    //buttons starts off enabled
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

    //checkbox starts off un-checked
    //look at jest-dom for matchers
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked, enabled when unchecked', () => {
    render(<App />);

    const checkbox = screen.getByRole('checkbox');
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    //disabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled;

    //enabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled;

});