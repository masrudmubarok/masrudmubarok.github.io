
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders copyright', () => {
    render(<Footer />);
    // Cari simbol © atau tahun
    const year = new Date().getFullYear().toString();
    expect(screen.getByText((content) => content.includes('©') && content.includes(year))).toBeInTheDocument();
  });
});