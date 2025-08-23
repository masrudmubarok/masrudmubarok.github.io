import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders navigation', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
