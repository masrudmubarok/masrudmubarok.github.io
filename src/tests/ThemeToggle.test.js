import { render, screen } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle Component', () => {
  it('renders theme toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
