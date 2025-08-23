import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/software engineer|web|mobile/i)).toBeInTheDocument();
  });
});
