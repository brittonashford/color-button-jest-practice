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