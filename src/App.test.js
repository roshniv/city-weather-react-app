import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders search-bar on the initial load', () => {
  const { container } = render(<App />);
  const inputElement = container.querySelector('#search-bar');
  expect(inputElement).toBeInTheDocument();
});

test('every time value change happens to search-bar onChange gets called', () => {
  const { container } = render(<App />);
  const inputElement = container.querySelector('#search-bar');
  const handleClick = jest.fn()
  inputElement.addEventListener("change", handleClick);
  fireEvent.change(inputElement, {target: {value: 'sydney'}});
  expect(handleClick).toHaveBeenCalledTimes(1);
  fireEvent.change(inputElement, {target: {value: 'sydney123'}});
  expect(handleClick).toHaveBeenCalledTimes(2);
});

