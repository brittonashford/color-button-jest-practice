import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button renders correct initial color', () => {
    render(<App />);

    //button exists, initial text
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    //initial color 
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    //click
    fireEvent.click(colorButton);

    //expect color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

    //button text --> 'Change to red'
    expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
    render(<App />);

    //buttons starts off enabled
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    expect(colorButton).toBeEnabled();

    //checkbox starts off un-checked
    //look at jest-dom for matchers
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
    expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked, enabled when unchecked', () => {
    render(<App />);

    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

    //red button is disabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    //red button is re-enabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    //blue button is disabled
    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    //blue button is re-enabled
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

//describe groups tests
describe('spaces before camel-case letters', () => {
    test('Works for no inner caps', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('works with muiltiple inner caps', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    })
})

