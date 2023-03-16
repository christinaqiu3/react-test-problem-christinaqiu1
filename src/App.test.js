import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // import the library

// import your story from App.stories.js
import App from './App';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

it('initial display', () => {
    render(<App />);

    expect(screen.getByRole('button')).toHaveTextContent('click me');

});

it('final display', () => {
    render(<App />);

    fireEvent.click(screen.getByText('click me'))

    expect(screen.getByText('thanks'))

});