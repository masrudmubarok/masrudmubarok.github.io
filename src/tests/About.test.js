import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About Component', () => {
  it('renders profile name', () => {
    render(<About />);
    expect(screen.getByText(/Masrud Mubarok/i)).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    const categories = [
      /Programming Language/i, /Database/i, /Backend/i, /Frontend/i,
      /Testing/i, /Observability/i, /Version Control/i, /Containerization/i, /Cloud/i
    ];
    render(<About />);
    categories.forEach(cat => {
      const found = screen.getAllByText(cat);
      expect(found.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders AWS skill in Cloud category', () => {
    render(<About />);
    const aws = screen.getAllByText(/AWS/i);
    expect(aws.length).toBeGreaterThanOrEqual(1);
  });

  it('renders experience section heading only once', () => {
    render(<About />);
    // Cari heading dengan role dan nama persis
    const heading = screen.getByRole('heading', { name: /Experience/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders education section heading only once', () => {
    render(<About />);
    const headings = screen.getAllByText(/Education/i);
    expect(headings.length).toBe(1);

    const stiki = screen.getAllByText((t) => t.includes('STIKI Malang'));
    expect(stiki.length).toBeGreaterThanOrEqual(1);
  });
});