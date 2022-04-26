import { render, screen } from '@testing-library/react';
import MyCustomButton from './MyCustomButton';

it('renders MyCustomButton', () => {
  render(<MyCustomButton />);
  expect(screen.getByText(/hello/i)).toBeTruthy();
});
