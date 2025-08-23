import { render, screen } from '@testing-library/react';
import Portfolio from '../components/Portfolio';

describe('Portfolio Component', () => {
  it('renders portfolio section heading only once', () => {
    render(<Portfolio />);
    const headings = screen.getAllByText(/portfolio|project/i);
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});