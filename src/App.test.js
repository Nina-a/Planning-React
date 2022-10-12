import { render, act, screen } from '@testing-library/react';
import App from './app';

test('First test', () => {
  act(() => {
    render(<App />);
  });
  const checkContent = screen.getByTestId("9 AM");
  expect(checkContent).toHaveTextContent("9 AM");
})
